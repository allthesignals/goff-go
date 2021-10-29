const { GoogleSpreadsheet } = require('google-spreadsheet');
require('dotenv').config();

// const HEADER_VALUES = ['A', 'B', 'C', 'D', 'E'];
const HEADER_VALUES = ['picture', 'activity', 'description', 'sponsor'];

exports.handler = async (event) => {
  const tiles = JSON.parse(event.body);
  const { authentication } = event.headers;
  const mungedTiles = reshapeTilesToList(tiles);

  try {
    await submitResults(mungedTiles, authentication);

    return {
      statusCode: 200,
    };
  } catch (e) {
    console.log(e);

    return {
      statusCode: 500,
      error: e.toString(),
    };
  }
};

const submitResults = async (tiles, user) => {
  const doc = new GoogleSpreadsheet('1tMq2vfnkqIJ7OdfhdbyHPltURII_ed3xV-86zD6opEw');
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    private_key: privateKey.replace(/\\n/gm, "\n"),
  });

  const now = Date.now();
  const sheetTitle = `${user}-${now}`;

  const sheet = await doc.addSheet({
    title: sheetTitle,
    headerValues: HEADER_VALUES,
  });

  await sheet.addRows(tiles);
  await sheet.loadCells();

  tiles.forEach((tile, index) => {
    if (tile.picture) {
      const cell = sheet.getCell(index + 1, 0);

      cell.formula = `=HYPERLINK("${tile.picture}", IMAGE("${tile.picture}",1))`;
    }
  });

  await sheet.saveUpdatedCells();
  await sheet.updateDimensionProperties('COLUMNS', {
    pixelSize: 300,
  });
  await sheet.updateDimensionProperties('ROWS', {
    pixelSize: 300,
  }, {
    startIndex: 1,
  });
}

const reshapeTilesToList = (tiles) => {
  return tiles
    .map(tile => ({
      sponsor: tile.sponsor,
      activity: tile.activity.title,
      description: tile.activity.description,
      picture: tile.image,
    }))
    .filter(tile => tile.picture);
};

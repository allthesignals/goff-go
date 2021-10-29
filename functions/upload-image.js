const uuid = require('uuid')
const AWS = require('aws-sdk')
require('dotenv').config();

const s3 = new AWS.S3({
  region: 'us-west-2',
  bucket: 'viva-las-sisu',
  accessKeyId: process.env.ACCESS_KEY_ID,
  secretAccessKey: process.env.SECRET_ACCESS_KEY,
});

const uuidv4 = uuid.v4;

exports.handler = async (event) => {
  const json = JSON.parse(event.body);
  const { fileType, extension } = json;

  return await getUploadURL(fileType, extension);
};

const getUploadURL = async (contentType, extension) => {
  const actionId = uuidv4();

  const s3Params = {
    Bucket: 'viva-las-sisu',
    Key: `${actionId}.${extension}`,
    CacheControl: 'max-age=31104000',
    ContentType: contentType,
  }

  return new Promise((resolve, reject) => {
    s3.getSignedUrl('putObject', s3Params, function(err, data) {
      resolve({
        statusCode: 200,
        isBase64Encoded: false,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({
          uploadURL: data,
          photoFilename: actionId,
        }),
      });
    });
  });
}

import Service from '@ember/service';
import { inject as service } from '@ember/service';
import EmberObject, { computed } from '@ember/object';
import fetch from 'fetch';
import { getSponsor } from '../utils/sponsors';
import { getTier } from '../utils/tiers';

const TILE_COUNT = 25;
const TILES_LOCAL_STORAGE_KEY = 'EMBER_BINGO_TILES';


function generateTile(tilePosition) {
  const tier = getTier(tilePosition);
  const { name, activity, logo, ...everythingElse } = getSponsor(tier);

  return EmberObject.create({
    sponsor: name,
    activity,
    selected: false,
    logo,
    ...everythingElse,
  });
}

/*
  @title Titles Adapter Service
  @dev This service manages the cache fetching and updating of tile objects from localStorage.
  It holds the tiles state for the bingo board.
*/
export default Service.extend({
  localStorage: service(),

  tiles: computed({
    get() {
      return [];
    }
  }),

  // Check to see if tiles are already in localStorage. If so, use them, otherwise, build a new collection of tiles.
  init() {
    this._super(...arguments);

    let tiles = this.get('localStorage').getItem(TILES_LOCAL_STORAGE_KEY);

    if (!tiles) {
      this.newTiles();

      this.saveTiles();

      return;
    }

    tiles = tiles.map((tile) => {
      const tileClass = EmberObject.create(tile);
      tileClass.activity = EmberObject.create(tileClass.activity);

      return tileClass;
    });
    this.set('tiles', tiles);
    this.saveTiles();
  },

  newTiles() {
    const tiles = [];

    for (let i = 0; i < TILE_COUNT; i++) {
      let tile;

      tile = generateTile(i);

      tiles.push(tile);
    }

    this.set('tiles', tiles);
  },

  saveTiles() {
    const tiles = this.get('tiles');

    this.get('localStorage').setItem(TILES_LOCAL_STORAGE_KEY, tiles);
  },

  submitTiles(userInfo) {
    const tiles = this.get('tiles');

    return fetch('/.netlify/functions/submit-results', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authentication': userInfo,
      },
      body: JSON.stringify(tiles),
    });
  }
});

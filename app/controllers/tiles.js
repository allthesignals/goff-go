import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class TilesController extends Controller {
  @service
  tilesAdapter;

  @action
  async successfulUpload(uploadUrl) {
    this.model.set('image', uploadUrl);
    this.model.set('selected', true);

    this.tilesAdapter.saveTiles();

    this.transitionToRoute('index');
  }
}

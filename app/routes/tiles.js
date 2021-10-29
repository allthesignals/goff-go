import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class TilesRoute extends Route {
  @service()
  tilesAdapter;

  model({ id }) {
    return this.tilesAdapter.tiles.findBy('slug', id);
  }
}

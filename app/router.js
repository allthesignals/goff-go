import EmberRouter from '@ember/routing/router';
import config from 'ember-bingo/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('tiles', { path: 'tiles/:id' });
});

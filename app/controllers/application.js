import Controller from '@ember/controller';

export default class ApplicationController extends Controller {
  queryParams = ['user'];

  isLocal = window.location.host.includes('localhost');

  user = 'unknown';
}

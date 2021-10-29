import Application from 'ember-bingo/app';
import config from 'ember-bingo/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();

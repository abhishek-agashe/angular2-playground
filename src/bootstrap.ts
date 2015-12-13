import {bootstrap, provide} from 'angular2/angular2';
import {HTTP_PROVIDERS} from 'angular2/http';
//import {TodoService} from './services/todoservice';
//import {bootstrap} from 'angular2-universal-preview';

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'

import {App} from './app';

bootstrap(App, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, { useClass: HashLocationStrategy })]);

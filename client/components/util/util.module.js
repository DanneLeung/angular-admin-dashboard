'use strict';

import {
  UtilService
} from './util.service';

export default angular.module('angularApp.util', [])
  .factory('Util', UtilService)
  .name;

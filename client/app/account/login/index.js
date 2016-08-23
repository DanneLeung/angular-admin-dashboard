'use strict';

import LoginController from './login.controller';

export default angular.module('angularApp.login', [])
  .controller('LoginController', LoginController)
  .name;

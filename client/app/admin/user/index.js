'use strict';
import userController from './user.controller';

export default angular.module('angularApp.user', [])
  .controller('UserController', userController)
  .name;

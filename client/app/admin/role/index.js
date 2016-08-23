'use strict';
import roleController from './role.controller';

export default angular.module('angularApp.role', [])
  .controller('RoleController', roleController)
  .name;

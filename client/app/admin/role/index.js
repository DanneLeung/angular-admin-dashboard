'use strict';
import roleController from './role.controller';
import {
  RoleResource
} from './role.service';

export default angular.module('angularApp.role', [])
  .controller('RoleController', roleController)
  .factory('Role', RoleResource)
  .name;

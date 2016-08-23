'use strict';

import routes from './admin.routes';
import user from './user';
import role from './role';
// import AdminController from './admin.controller';

export default angular.module('angularApp.admin', ['angularApp.auth', 'ui.router'
  , user, role
])
  .config(routes)
  // .controller('AdminController', AdminController)
  .name;

'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('admin', {
    url: '/admin',
    template:  require('./admin.html'),
  }).state('admin.user', {
    url: '/user',
    template: require('./user/user.html'),
    controller: 'UserController'
  }).state('admin.role', {
    url: '/role',
    template: require('./role/role.html'),
    controller: 'RoleController'
  })
  ;
};

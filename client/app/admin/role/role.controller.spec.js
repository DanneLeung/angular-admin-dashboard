'use strict';

describe('Controller: RoleCtrl', function() {
  // load the controller's module
  beforeEach(module('angularApp.role'));

  var RoleCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    RoleCtrl = $controller('RoleCtrl', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});

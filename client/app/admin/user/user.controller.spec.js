'use strict';

describe('Controller: UserCtrl', function() {
  // load the controller's module
  beforeEach(module('angularApp.user'));

  var UserCtrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    UserCtrl = $controller('UserCtrl', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});

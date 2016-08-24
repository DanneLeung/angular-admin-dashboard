'use strict';
//@flow

export default class RoleController {
  roles: Object[];
  /*@ngInject*/
  constructor(Role) {
    this.roles = Role.query();
  }

}


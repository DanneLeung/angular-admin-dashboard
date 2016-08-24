'use strict';

export function RoleResource($resource) {
  'ngInject';

  return $resource('/api/roles/:id/:controller', {
    id: '@_id'
  }, {
    get: {
      method: 'GET',
      params: {
        id: 'me'
      }
    }
  });
}

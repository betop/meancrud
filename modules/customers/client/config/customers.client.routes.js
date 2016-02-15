'use strict';

// Setting up route
angular.module('customers').config(['$stateProvider',
  function ($stateProvider) {
    // Customers state routing
    $stateProvider
      .state('customers', {
        abstract: true,
        url: '/customers',
        template: '<ui-view/>'
      })
      .state('customers.list', {
        url: '',
        templateUrl: 'modules/customers/client/views/list-customers.client.view.html'
      });
  }
]);

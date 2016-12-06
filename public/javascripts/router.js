
(function () {
  'use strict';

  angular
    .module('mainApp')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function routeConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $urlRouterProvider.otherwise('/users/list');
    $stateProvider
      .state('users', {
        url: '/users',
        template: '<ui-view></ui-view>',
        abstract: true,
      })
      .state('users.list', {
        url: '/list',
        templateUrl: '/javascripts/views/users.template.html',
        controller: 'UserController',
        params: {
          pageState: "users"
        }
      });
  }
}());
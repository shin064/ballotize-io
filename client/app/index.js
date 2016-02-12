var Ballotize = angular.module('Ballotize', [
  'ui.router',
  'test'
])

Ballotize.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'app/test/view.html',
      controller: 'testController',
      controllerAs: 'test'
    });
});

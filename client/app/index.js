var Ballotize = angular.module('Ballotize', [
  'ui.router',
  'test',
  'landingpage',
  'ballotcreation'
])

Ballotize.config(function($stateProvider, $urlRouterProvider) {

  // For any unmatched url, redirect to /
  $urlRouterProvider.otherwise("/");

  // Now set up the states
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'app/landingpage/landingpageTemplate.html',
      controller: 'landingpageController',
      controllerAs: 'landingpage'
    })
    .state('ballotcreation', {
      url: '/create',
      templateUrl: 'app/ballotcreation/ballotcreationTemplate.html',
      controller: 'ballotcreationController',
      controllerAs: 'ballotcreation'
    })
    .state('test', {
      url: '/test',
      templateUrl: 'app/test/testTemplate.html',
      controller: 'testController',
      controllerAs: 'test'
    });
});

var Ballotize = angular.module('Ballotize', [
  'ui.router',
  'landingpage',
  'ballotcreation',
  'admin',
  'uservote'
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
    .state('admin', {
      url: '/admin',
      templateUrl: 'app/admin/adminTemplate.html',
      controller: 'adminController',
      controllerAs: 'admin'
    })
    .state('uservote', {
      url: '/vote',
      templateUrl: 'app/uservote/uservoteTemplate.html',
      controller: 'uservoteController',
      controllerAs: 'uservote'
    });
});

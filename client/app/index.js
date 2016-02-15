var Ballotize = angular.module('Ballotize', [
  'ui.router',
  'landingpage',
  'ballotcreation',
  'uservote',
  'results'
]);

Ballotize.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/");

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
    .state('uservote', {
      url: '/vote',
      templateUrl: 'app/uservote/uservoteTemplate.html',
      controller: 'uservoteController',
      controllerAs: 'uservote'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'app/results/resultsTemplate.html',
      controller: 'resultsController',
    });
});

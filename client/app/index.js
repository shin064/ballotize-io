var Ballotize = angular.module('Ballotize', [
  'ui.router',
  'landingpage',
  'ballotcreation',
  'userrankvote',
  'uservote',
  'results',
  'resultsrank'
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
    .state('userrankvote', {
      url: '/vote-rank',
      templateUrl: 'app/userrankvote/userrankvoteTemplate.html',
      controller: 'userrankvoteController',
      controllerAs: 'userrankvote'
    })
    .state('uservote', {
      url: '/vote',
      templateUrl: 'app/uservote/uservoteTemplate.html',
      controller: 'uservoteController',
      controllerAs: 'uservote'
    })
    .state('resultsrank', {
      url: '/resultsrank',
      templateUrl: 'app/resultsrank/resultsrankTemplate.html',
      controller: 'resultsrankController',
      controllerAs: 'resultsrank'
    })
    .state('results', {
      url: '/results',
      templateUrl: 'app/results/resultsTemplate.html',
      controller: 'resultsController',
      controllerAs: 'results'
    });
});

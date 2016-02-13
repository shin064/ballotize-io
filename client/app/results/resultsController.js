var results = angular.module('results', []);

results.controller('resultsController', ['$scope', 'Ballot', function($scope, Ballot){
  var ctrl = this;
  var ballot = Ballot.getBallot();

  console.log('ballot info', ballot);

  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.results = ballot.results;
  ctrl.voters = ballot.voters;


  ctrl.hello = 'hello from results controller!';
}]);

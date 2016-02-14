var results = angular.module('results', []);

results.controller('resultsController', ['$scope', 'Ballot', 'Socket', function($scope, Ballot, Socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();

  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.tally = ballot.results;
  ctrl.voters = ballot.voters;

  console.log('ballot results', ballot);

  // Socket.on('vote saved', function (data) {
  //   console.log('data back from socket', data);
  //   // ballot = data;
  //   ctrl.topic = data.topic;
  //   ctrl.options = data.options;
  //   ctrl.results = data.results;
  //   ctrl.voters = data.voters;
  //
  //   console.log('scope', ctrl);
  // });


}]);

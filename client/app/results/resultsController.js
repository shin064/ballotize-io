var results = angular.module('results', []);

results.controller('resultsController', ['$scope', 'Ballot', 'socket', function($scope, Ballot, socket){
  var ballot = Ballot.getBallot();

  $scope.topic = ballot.topic;
  $scope.options = ballot.options;
  $scope.tally = ballot.results;
  $scope.voters = ballot.voters;

  socket.emit('newVote', ballot);

  socket.on('newVote', function(data){
    $scope.topic = data.topic;
    $scope.options = data.options;
    $scope.tally = data.results;
    $scope.voters = data.voters;
  });

}]);

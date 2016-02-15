var results = angular.module('results', []);

results.controller('resultsController', ['$scope', 'Ballot', 'socket', function($scope, Ballot, socket){
  // var socket = io.connect('http://localhost:8080');
  var ballot = Ballot.getBallot();

  $scope.test = '';
  $scope.input = '';
  $scope.topic = ballot.topic;
  $scope.options = ballot.options;
  $scope.tally = ballot.results;
  $scope.voters = ballot.voters;

  console.log('ballot results', ballot);

  $scope.send = function(input){
    socket.emit('new:vote', input);
  }

  socket.on('new:vote', function (data) {
    console.log('data back from socket', data);
    $scope.test = data;
    // ballot = data;
    // $scope.$apply(function(){
    //   $scope.topic = data.topic;
    //   $scope.options = data.options;
    //   $scope.results = data.results;
    //   $scope.voters = data.voters;
    //   console.log('scope', ctrl);
    // });

  });


}]);

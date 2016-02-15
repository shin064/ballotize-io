var results = angular.module('results', []);

results.controller('resultsController', ['$scope', 'Ballot', 'User', 'socket', function($scope, Ballot, User, socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();
  
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.tally = ballot.results;
  ctrl.voters = ballot.voters;
  ctrl.isOwner = User.isOwner;

  socket.emit('subscribe', ballot.roomcode);
  socket.emit('newVote', ballot);

  socket.on('newVote', function(data){
    ctrl.topic = data.topic;
    ctrl.options = data.options;
    ctrl.tally = data.results;
    ctrl.voters = data.voters;
  });

}]);

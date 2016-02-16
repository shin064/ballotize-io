var resultsrank = angular.module('resultsrank', []);

resultsrank.controller('resultsrankController', ['$scope', 'Ballot', 'User', 'socket', function($scope, Ballot, User, socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();

  ctrl.username = User.getUser();
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.tally = ballot.results;
  ctrl.voters = ballot.voters;
  ctrl.isOwner = User.isOwner;
  ctrl.roomcode = ballot.roomcode;
  ctrl.done = ballot.done;
  ctrl.hasVoted = User.hasVoted();

  ctrl.endVote = function(roomcode){
    socket.emit('endVote', ballot);
    Ballot.endVote(roomcode);
  };

  socket.emit('subscribe', ballot.roomcode);
  socket.emit('newVote', ballot);

  socket.on('newVote', function(data){
    ctrl.topic = data.topic;
    ctrl.options = data.options;
    ctrl.tally = data.results;
    ctrl.voters = data.voters;
  });

  socket.on('endVote', function(data){
    ctrl.done = true;
  });

}]);

var uservote = angular.module('uservote', []);

uservote.controller('uservoteController', ['$scope', 'User', 'Ballot', 'Socket', function($scope, User, Ballot, Socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();
  var hasVoted = false;
  var currentChoice = null;

  ctrl.roomcode = ballot.roomcode;
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;

  ctrl.selectChoice = function(choiceKey){
    currentChoice = choiceKey;
  }

  ctrl.submitVote = function(){
    var user = User.getUser();
    var roomCode = ctrl.roomcode;

    if(currentChoice === null){
      console.log('please select a choice to vote for');
    }

    if(!hasVoted && currentChoice !== null){
      Socket.emit('new vote', {code: roomCode, username: user, choice: currentChoice});
      hasVoted = true;
    }
  }
}]);

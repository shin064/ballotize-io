var uservote = angular.module('uservote', []);

uservote.controller('uservoteController', ['$scope', '$state', 'User', 'Ballot', 'socket', function($scope, $state, User, Ballot, socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();
  var hasVoted = false;
  var currentChoice = null;

  ctrl.roomcode = ballot.roomcode;
  ctrl.username = User.getUser();
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.errorMsg = '';

  console.log('inside uservote Controller');

  ctrl.selectChoice = function(choiceKey){
    currentChoice = choiceKey;
  }

  ctrl.submitVote = function(){
    var user = User.getUser();
    var roomCode = ctrl.roomcode;

    if(currentChoice === null){
      ctrl.errorMsg = 'Please select a choice before submitting';
    }

    if(!hasVoted && currentChoice !== null){
      Ballot.voteBallot(user, roomCode, currentChoice);
      hasVoted = true;
    }
  }
}]);

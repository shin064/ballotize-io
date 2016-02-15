var uservote = angular.module('uservote', []);

uservote.controller('uservoteController', ['$scope', '$state', 'User', 'Ballot', 'socket', function($scope, $state, User, Ballot, socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();
  var hasVoted = false;
  var currentChoice = null;

  ctrl.username = User.getUser();
  ctrl.roomcode = ballot.roomcode;
  ctrl.username = User.getUser();
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.errorMsg = '';

  console.log('inside uservote Controller');
  if (ballot.done){
    $state.go('results');
  }

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

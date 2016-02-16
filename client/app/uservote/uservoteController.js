var uservote = angular.module('uservote', []);

uservote.controller('uservoteController', ['$scope', '$state', 'User', 'Ballot', 'socket', function($scope, $state, User, Ballot, socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();
  var hasVoted = false;
  var rankedVotes = {}; //{0: {name: "asd", vote: "1"}, 1: {name: "sdf", vote: "2"}}

  ctrl.username = User.getUser();
  ctrl.roomcode = ballot.roomcode;
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.errorMsg = '';

  console.log('inside uservote Controller');
  if (ballot.done){
    $state.go('results');
  }

  for (var key in ctrl.options) {
    rankedVotes[key] = {};
    rankedVotes[key].name = ctrl.options[key];
    rankedVotes[key].vote = null;
  }
  ctrl.rankedVotes = rankedVotes;
  console.log('rankedVotes:', rankedVotes);

  ctrl.submitVote = function(){
    var user = User.getUser();
    var roomCode = ctrl.roomcode;

    if(currentChoice === null){
      ctrl.errorMsg = 'Please select a choice before submitting';
    }

    if(!hasVoted && currentChoice !== null){
      Ballot.voteBallot(user, roomCode, currentChoice);
      User.markVoted();
      hasVoted = true;
    }
  }
}]);

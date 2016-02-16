var userrankvote = angular.module('userrankvote', []);

userrankvote.controller('userrankvoteController', ['$scope', '$state', 'User', 'Ballot', 'socket', function($scope, $state, User, Ballot, socket){
  var ctrl = this;
  var ballot = Ballot.getBallot();
  var hasVoted = false;
  var rankedVotes = {}; //{0: {name: "asd", vote: "1"}, 1: {name: "sdf", vote: "2"}}

  ctrl.username = User.getUser();
  ctrl.roomcode = ballot.roomcode;
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;
  ctrl.errorMsg = '';

  console.log('inside userrankvote Controller');
  if (ballot.done){
    $state.go('resultsrank');
  }
  ctrl.results = ballot.results;


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

    for (var key in rankedVotes) {
      if (rankedVotes[key].vote === null) {
        console.log('please rank all choices');
      };
      if (!hasVoted && rankedVotes[key].vote !== null){
        Ballot.voteRankedBallot(user, roomCode, rankedVotes);
        hasVoted = true;
      }
    }

  }
}]);

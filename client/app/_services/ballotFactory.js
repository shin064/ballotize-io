var Ballotize = angular.module('Ballotize');

Ballotize.factory('Ballot', ['$http', '$state', 'User', 'socket', function($http, $state, User, socket){
  var currentBallot = {};

  var createBallot = function(ballotInfo){
    $http({
	    method: 'POST',
	    url: '/ballot',
	    data: JSON.stringify(ballotInfo),
	    headers: {'Content-Type': 'application/json'}
	  }).then(function success(response){
	    console.log('success',response);
      setBallot(response.data);
	    $state.go('uservote');
	  }, function error(response){
	    console.log('error',response);
	  });
  };

  var createRankBallot = function(ballotInfo){
    $http({
      method: 'POST',
      url: '/ballot',
      data: JSON.stringify(ballotInfo),
      headers: {'Content-Type': 'application/json'}
    }).then(function success(response){
      console.log('success',response);
      setBallot(response.data);
      $state.go('userrankvote');
    }, function error(response){
      console.log('error',response);
    });
  };

  var fetchBallot = function(input, username){
    $http({
      method: 'GET',
      url: '/ballot',
      params: {
        code: input,
        username: username
      }
    }).then(function success(response){
      if(response.data.name === 'CastError'){
        //TODO: error handle
        console.log('enter a valid code')
      } else {
        console.log('fetch ball', response.data);
        setBallot(response.data);
        socket.emit('newVote',response.data);
        if (response.data.ballotType === "nonranked") {
          $state.go('uservote');
        }
        if (response.data.ballotType === "ranked") {
          $state.go('userrankvote');
        }
      }
    }, function error(response){
      console.log('error',response);
    });
  };

  var fetchResults = function(input){
    $http({
      method: 'GET',
      url: '/ballot',
      params: {
        code: input
      }
    }).then(function success(response){
      if(response.data.name === 'CastError'){
        //TODO: error handle
        console.log('enter a valid code')
      } else {
        console.log(response.data);
        setBallot(response.data);
        $state.go('results');
      }
    }, function error(response){
      console.log('error',response);
    });
  }

  var setBallot = function(ballot){
    currentBallot = ballot;
    return currentBallot;
  };

  var getBallot = function(){
    return currentBallot;
  };

  var voteBallot = function(username, roomcode, choiceKey){
    $http({
      method: 'POST',
      url: '/vote',
      data: {
        code: roomcode,
        username: username,
        choice: choiceKey
      }
    }).then(function success(response){
      setBallot(response.data);
      $state.go('results');
    }, function error(response){
      console.log('error',response);
    });
  };

  var endVote = function(roomcode){
    console.log('endVote called with roomcode: ',roomcode);
    $http({
      method: 'POST',
      url: '/endvote',
      data: {roomcode: roomcode}
    }).then(function success(response){
      console.log('success',response);
      setBallot(response.data);

    }, function error(response){
      console.log('error',response);
    });
  };

  var voteRankedBallot = function(username, roomcode, rankedVotes) {
    $http({
      method: 'POST',
      url: '/vote/rank',
      data: {
        code: roomcode,
        username: username,
        rankedVotes: rankedVotes
      }
    }).then(function success(response){
      setBallot(response.data);
      $state.go('resultsrank');
    }, function error(response){
      console.log('error',response);
    });
  }

  return {
    createBallot: createBallot,
    createRankBallot: createRankBallot,
    fetchBallot: fetchBallot,
    fetchResults: fetchResults,
    setBallot: setBallot,
    getBallot: getBallot,
    voteBallot: voteBallot,
    endVote: endVote,
    voteRankedBallot: voteRankedBallot
  }


}]);

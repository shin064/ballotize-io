var Ballotize = angular.module('Ballotize');

Ballotize.factory('Ballot', ['$http', '$state', 'User', function($http, $state, User){
  var currentBallot = {};

  var createBallot = function(ballotInfo){
    $http({
	    method: 'POST',
	    url: '/ballot',
	    data: JSON.stringify(ballotInfo),
	    headers: {'Content-Type': 'application/json'}
	  }).then(function success(response){
	    console.log('success',response);
	    $state.go('uservote');
	  }, function error(response){
	    console.log('error',response);
	  });
  }

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
        console.log(response.data);
        setBallot(response.data);
        $state.go('uservote');
      }
    }, function error(response){
      console.log('error',response);
    });
  }

  var setBallot = function(ballot){
    currentBallot = ballot;
    return currentBallot;
  }

  var getBallot = function(){
    return currentBallot;
  }

  var voteBallot = function(username, roomcode, choiceKey){
    console.log('in vote ballot', arguments);
    $state.go('results');

    $http({
      method: 'POST',
      url: '/vote',
      data: {
        code: roomcode,
        username: username,
        choice: choiceKey
      }
    }).then(function success(response){
      console.log('success',response);
      $state.go('results');
    }, function error(response){
      console.log('error',response);
    });
  }

  return {
    createBallot: createBallot,
    fetchBallot: fetchBallot,
    setBallot: setBallot,
    getBallot: getBallot,
    voteBallot: voteBallot
  }
}]);

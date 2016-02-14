var Ballotize = angular.module('Ballotize');

Ballotize.factory('Ballot', ['$http', '$state', 'User', 'Socket', function($http, $state, User, Socket){
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
    Socket.emit('new vote', {code: roomcode, username: username, choice: choiceKey});
    Socket.on('vote saved', function(data){
      setBallot(data);
    })
    $state.go('results');
  }

  return {
    createBallot: createBallot,
    fetchBallot: fetchBallot,
    setBallot: setBallot,
    getBallot: getBallot,
    voteBallot: voteBallot
  }
}]);

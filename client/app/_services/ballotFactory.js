var Ballotize = angular.module('Ballotize');

Ballotize.factory('Ballot', ['$http', '$state', 'User', function($http, $state, User){
  var currentBallot = {};

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

  return {
    fetchBallot: fetchBallot,
    setBallot: setBallot,
    getBallot: getBallot
  }
}]);

var Ballotize = angular.module('Ballotize');

Ballotize.factory('Ballot', ['$http', '$state', 'User', function($http, $state, User){
  var getBallot = function(input, username){
    $http({
       method: 'GET',
       url: '/ballot',
       params: {
         code: input,
         username: username
       }
     }).then(function success(response){
       if(response.data.name === 'CastError'){
         console.log('enter a valid code')
       } else {
         $state.go('uservote');
         console.log(response);
       }
     }, function error(response){
       console.log('error',response);
     });
  }

  return {
    getBallot: getBallot
  }
}]);

var landingpage = angular.module('landingpage');

landingpage.factory('BallotizeFactory', ['$http', function($http){
  var code = '';
  var user = '';

  var setUser = function(username){
    return user = username;
  }

  var getUser = function(){
    return user;
  }

  var setCode = function(input){
    return code = input;
  }

  var getCode = function(){
    return code;
  }

  var getBallot = function(input, username){
    $http({
       method: 'GET',
       url: '/ballot',
       data: JSON.stringify({
         code: input,
         username: username
       }),
       headers: {'Content-Type': 'application/json'}
     }).then(function success(response){
       console.log('success',response)
     }, function error(response){
       console.log('error',response);
     });
  }

  return {
    setUser: setUser,
    getUser: getUser,
    setCode: setCode,
    getCode: getCode,
    getBallot: getBallot
  }
}]);

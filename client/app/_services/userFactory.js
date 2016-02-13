var Ballotize = angular.module('Ballotize');

Ballotize.factory('User', [function(){
  var user = '';
  var code = '';

  var setUser = function(username){
    user = username;
    console.log('setUser called, user: ',user);
    return user;
  }

  var getUser = function(){
    console.log('getUser called, user: ',user);
    return user;
  }

  var setCode = function(input){
    return code = input;
  }

  var getCode = function(){
    return code;
  }

  return {
    setUser: setUser,
    getUser: getUser,
    setCode: setCode,
    getCode: getCode
  }
}]);

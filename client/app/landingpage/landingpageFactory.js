var landingpage = angular.module('landingpage');

landingpage.factory('BallotizeFactory', function(){
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

  return {
    setUser: setUser,
    getUser: getUser,
    setCode: setCode,
    getCode: getCode
  }
});

var Ballotize = angular.module('Ballotize');

Ballotize.factory('User', [function(){
  var user = '';
  var code = '';
  var owner = false;
  var voted = false;

  var makeOwner = function(){
    owner = true;
  }

  var isOwner = function(){
    return owner;
  }

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

  var markVoted = function(){
    voted = true;
  };

  var hasVoted = function(){
    return voted;
  }

  return {
    setUser: setUser,
    getUser: getUser,
    setCode: setCode,
    getCode: getCode,
    makeOwner: makeOwner,
    isOwner: isOwner,
    markVoted: markVoted,
    hasVoted: hasVoted
  }
}]);

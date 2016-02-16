var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'User', 'Ballot', function($scope, User, Ballot){
  var ctrl = this;

  ctrl.username = '';
  ctrl.code = '';
  ctrl.codeResults = '';

  ctrl.setInfo = function(username){
    if(username){
      User.setUser(username);
    } else {
      User.setUser('ReactIsBetterThanAngular' + Math.floor((Math.random()*100)+100));
    }
  }

  ctrl.fetchRoom = function(username, code){
    if(username){
      User.setUser(username);
    } else {
      User.setUser('ReactIsBetterThanAngular' + Math.floor((Math.random()*100)+100));
    }
    User.setCode(code);

    var user = User.getUser();

    Ballot.fetchBallot(code, user);
  }

  ctrl.fetchResults = function(code){
    User.setCode(code);

    Ballot.fetchResults(code);
  }

}]);

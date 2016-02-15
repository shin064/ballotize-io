var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'User', 'Ballot', function($scope, User, Ballot){
  var ctrl = this;

  ctrl.username = ''
  ctrl.code = '';

  ctrl.fetchRoom = function(username, code){
    if(ctrl.username === ''){
      User.setUser('ReactIsBetterThanAngular' + Math.floor((Math.random()*100)+100));
    } else {
      User.setUser(username);
    }
    User.setCode(code);
    Ballot.fetchBallot(code, username);
  }

  ctrl.setInfo = function(username){
    if(ctrl.username === '') {
      User.setUser('ReactIsBetterThanAngular' + Math.floor((Math.random()*100)+100));
    } else {
      User.setUser(username);
    }
  }
}]);

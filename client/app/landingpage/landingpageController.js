var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'User', 'Ballot', function($scope, User, Ballot){
  var ctrl = this;

  ctrl.username = '';
  ctrl.code = '';

  ctrl.fetchRoom = function(username, code){
    User.setUser(username);
    User.setCode(code);
    Ballot.fetchBallot(code, username);
  }

  ctrl.setInfo = function(username){
    User.setUser(username);
  }
}]);

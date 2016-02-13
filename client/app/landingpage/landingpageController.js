var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'User', function($scope, User){
  this.username = '';
  this.code = '';

  this.setInfo = function(username, code){
    User.setUser(username);
    User.setCode(code);
    User.getBallot(code, username);
  }
}]);

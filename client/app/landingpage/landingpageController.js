var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'User', function($scope, User){
  var ctrl = this;

  ctrl.username = '';
  ctrl.code = '';

  ctrl.setInfo = function(username, code){
    User.setUser(username);
    User.setCode(code);
    User.getBallot(code, username);
  }
}]);

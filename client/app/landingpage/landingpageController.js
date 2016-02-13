var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'BallotizeFactory', function($scope, BallotizeFactory){
  this.username = '';
  this.code = '';

  this.setInfo = function(username, code){
    BallotizeFactory.setUser(username);
    BallotizeFactory.setCode(code);
    BallotizeFactory.getBallot(code, username);
  }
}]);

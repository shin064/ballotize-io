var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', 'User', 'Ballot', 'Socket', function($scope, User, Ballot, Socket){
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

  // Socket.on('news', function (data) {
  //   console.log(data);
  //   Socket.emit('my other event', { my: 'hello' });
  // });
}]);

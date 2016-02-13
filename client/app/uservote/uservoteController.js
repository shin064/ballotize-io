var uservote = angular.module('uservote', []);

uservote.controller('uservoteController', ['$scope', 'Ballot', function($scope, Ballot){
  var ctrl = this;
  var ballot = Ballot.getBallot();

  ctrl.roomcode = ballot.roomcode;
  ctrl.topic = ballot.topic;
  ctrl.options = ballot.options;

  ctrl.hello = 'hello from uservote controller';
}]);

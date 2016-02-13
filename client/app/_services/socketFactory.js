var Ballotize = angular.module('Ballotize');

Ballotize.factory('Socket', ['$state', '$rootScope', function($state, $rootScope){
  var socket = io.connect('http://localhost:8080');
  
  return socket;
}]);

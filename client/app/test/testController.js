var test = angular.module('Ballotize.test');

test.controller('testController', ['$scope', function($scope){
  this.hello = 'hello from test controller';
}]);

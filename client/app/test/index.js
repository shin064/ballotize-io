var test = angular.module('test', []);

test.controller('testController', ['$scope', function($scope){
  this.hello = 'hello from test controller';
}]);

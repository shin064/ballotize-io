var test = angular.module('test', []);

test.controller('testController', ['$scope', function($scope){
  $scope.hello = 'hello from test controller';
}]);

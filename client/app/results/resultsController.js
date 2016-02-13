var results = angular.module('results', []);

results.controller('resultsController', ['$scope',function($scope){
  this.hello = 'hello from results controller!';
}]);

var results = angular.module('results', []);

results.controller('resultsController', ['$scope',function($scope){
  var ctrl = this;

  ctrl.hello = 'hello from results controller!';
}]);

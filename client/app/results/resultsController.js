var results = angular.module('results', []);

results.controller('resultsController', ['$scope','room',function($scope,room){
  this.hello = 'hello from results controller!';
  console.log('room inside results page: ',room);
}]);

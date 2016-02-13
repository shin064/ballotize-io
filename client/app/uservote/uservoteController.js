var uservote = angular.module('uservote', []);

uservote.controller('uservoteController', ['$scope', function($scope){
  var ctrl = this;

  ctrl.hello = 'hello from uservote controller';
}]);

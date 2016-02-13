var admin = angular.module('admin', []);

admin.controller('adminController', ['$scope', function($scope){
  var ctrl = this;

  ctrl.hello = 'hello from admin controller';
}]);

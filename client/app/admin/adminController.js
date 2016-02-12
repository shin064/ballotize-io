var admin = angular.module('admin', []);

admin.controller('adminController', ['$scope', function($scope){
  this.hello = 'hello from admin controller';
}]);

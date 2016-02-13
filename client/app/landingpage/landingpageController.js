var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', function($scope){
  this.name = UserFactory.getName();
}]);

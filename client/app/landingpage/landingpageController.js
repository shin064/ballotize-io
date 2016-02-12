var landingpage = angular.module('landingpage', []);

landingpage.controller('landingpageController', ['$scope', function($scope){
  this.hello = 'hello from landingpage controller';
}]);

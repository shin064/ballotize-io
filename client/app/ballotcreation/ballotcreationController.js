var ballotcreation = angular.module('ballotcreation', []);


ballotcreation.controller('ballotcreationController', ['$scope','$http','$state',function($scope,$http,$state){

  this.hello = 'hello from ballotcreation controller';

	this.saved = {};

	this.add = function(){
	  this.options[++this.counter]='';
	}

	this.remove = function(){
	  delete this.options[this.counter--];
	  if (this.counter<0) {
	    this.counter=0;
	  }
	}

	this.submit = function() {
	  this.saved.topic = this.topic;
	  this.saved.options = angular.copy(this.options);
	  $http({
	    method: 'POST',
	    url: '/ballot',
	    data: JSON.stringify(this.saved),
	    headers: {'Content-Type': 'application/json'}
	  }).then(function success(response){
	    console.log('success',response);
	    $state.go('uservote');
	  }, function error(response){
	    console.log('error',response);
	  });
	};

	this.reset = function() {
		this.master = {1:''};
	  this.options = angular.copy(this.master);
	  this.topic = '';
	  this.counter = 1;
	};

	this.reset();
}]);

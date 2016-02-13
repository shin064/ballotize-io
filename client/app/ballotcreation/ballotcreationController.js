var ballotcreation = angular.module('ballotcreation', []);


ballotcreation.controller('ballotcreationController',  ['$scope', '$http', '$state', 'User', function($scope, $http, $state, User){
  var ctrl = this;

	ctrl.saved = {};

	ctrl.add = function(){
	  ctrl.options[++ctrl.counter] = '';
	}

	ctrl.remove = function(){
	  delete ctrl.options[ctrl.counter--];
	  if(ctrl.counter < 0){
	    ctrl.counter = 0;
	  }
	}

	ctrl.submit = function() {
	  ctrl.saved.topic = ctrl.topic;
	  ctrl.saved.options = angular.copy(ctrl.options);
	  ctrl.saved.username = User.getUser();
	  $http({
	    method: 'POST',
	    url: '/ballot',
	    data: JSON.stringify(ctrl.saved),
	    headers: {'Content-Type': 'application/json'}
	  }).then(function success(response){
	    console.log('success',response);
	    $state.go('uservote');
	  }, function error(response){
	    console.log('error',response);
	  });
	};

	ctrl.reset = function() {
		ctrl.master = {1: ''};
	  ctrl.options = angular.copy(ctrl.master);
	  ctrl.topic = '';
	  ctrl.counter = 1;
	};

	ctrl.reset();
}]);

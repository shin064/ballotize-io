var ballotcreation = angular.module('ballotcreation', []);

ballotcreation.controller('ballotcreationController',  ['$scope', '$http', '$state', 'User', 'Ballot', function($scope, $http, $state, User, Ballot){
  var ctrl = this;

	ctrl.saved = {};

	ctrl.add = function(){
	  ctrl.options[++ctrl.counter] = '';
	}

	ctrl.remove = function(){
	  if(ctrl.counter > 2){
      delete ctrl.options[ctrl.counter--];
	  }
	}

	ctrl.submit = function() {
	  ctrl.saved.topic = ctrl.topic;
	  ctrl.saved.options = angular.copy(ctrl.options);
	  ctrl.saved.username = User.getUser();
	  Ballot.createBallot(ctrl.saved);
	};

	ctrl.reset = function() {
		ctrl.master = {1: '', 2: ''};
	  ctrl.options = angular.copy(ctrl.master);
	  ctrl.topic = '';
	  ctrl.counter = 2;
	};

	ctrl.reset();
}]);

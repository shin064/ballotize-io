var ballotcreation = angular.module('ballotcreation', []);

ballotcreation.controller('ballotcreationController',  ['$scope', '$http', '$state', 'User', 'Ballot', function($scope, $http, $state, User, Ballot){
  var ctrl = this;

	ctrl.saved = {};

	ctrl.add = function(){
	  ctrl.options[++ctrl.counter] = '';
	};

	ctrl.remove = function(){
	  if(ctrl.counter > 1){
      delete ctrl.options[ctrl.counter--];
	  }
	};

	ctrl.submit = function() {
	  ctrl.saved.topic = ctrl.topic;
	  ctrl.saved.options = angular.copy(ctrl.options);
	  ctrl.saved.username = User.getUser();
	  ctrl.saved.ballotType = "nonranked";
	  Ballot.createBallot(ctrl.saved);
	  User.makeOwner();
	};

	ctrl.submitrank = function() {
	  ctrl.saved.topic = ctrl.topic;
	  ctrl.saved.options = angular.copy(ctrl.options);
	  ctrl.saved.username = User.getUser();
	  ctrl.saved.ballotType = "ranked";
	  Ballot.createRankBallot(ctrl.saved);
	  User.makeOwner();
	};

	ctrl.reset = function() {
		ctrl.master = {0: '', 1: ''};
	  ctrl.options = angular.copy(ctrl.master);
	  ctrl.topic = '';
	  ctrl.counter = 1;
	};

	ctrl.reset();
}]);

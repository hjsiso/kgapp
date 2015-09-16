angular.module("kgapp").controller("LoginOptCtrl", ['$meteor', '$state','$mdToast',
  function ($meteor, $state, $mdToast) {
  	var vm = this;

  	vm.access = function () {
  		$state.go('login');
  	};
   }
]);
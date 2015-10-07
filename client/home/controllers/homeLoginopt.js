angular.module("kgapp").controller("LoginOptCtrl", ['$meteor', '$state','$mdToast',
  function ($meteor, $state, $mdToast) {
  	var vm = this;
    vm.isOpen = false;
    vm.toggleCustom = function() {
      	//vm.custom = vm.custom === false ? true: false;
      	console.log(vm.custom);
    };
  	vm.access = function () {
  		$state.go('login');
  	};

    vm.showOpt = function(){
      vm.isOpen = true;
    };

    vm.hideOpt = function  () {
       vm.isOpen = false;
    }
   }
]);
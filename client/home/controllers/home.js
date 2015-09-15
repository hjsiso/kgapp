angular.module("kgapp").controller("homeCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    
    var vm = this;

    if(Meteor.user() == null){
      $state.go("login");
    }
     
    vm.logout = function () {
	    Meteor.logout(function() {
	      console.log('Bye Meteorite! Come back whenever you want!');
	      $state.go('login');
	    });
    };
     
  }
]);
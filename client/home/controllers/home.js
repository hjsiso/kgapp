angular.module("kgapp").controller("homeCtrl", ['$meteor', '$state','$interval',
  function ($meteor, $state, $interval) {
    
  var vm = this;


vm.determinateValue = 0;

$interval(function() {
        // Increment the Determinate loader
        vm.determinateValue += 1;
        //console.log(vm.determinateValue);
        if (vm.determinateValue > 100) {
          vm.determinateValue = 0;
        }
  } , 50, 0, true);    

  vm.user = {
      name: 'Hector  Siso',
      email: '',
      phone: '',
      address: 'Carcas, DC'
    };

   /* if(Meteor.user() == null){
      $state.go("login");
    }*/
     
    vm.logout = function () {
	    Meteor.logout(function() {
	      console.log('Bye Meteorite! Come back whenever you want!');
	      $state.go('login');
	    });
    };
     
    vm.login = function () {
      Meteor.logout(function() {
        console.log('Bye Meteorite! Come back whenever you want!');
        $state.go('login');
      });
    };

  }
]);
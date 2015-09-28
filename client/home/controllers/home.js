angular.module("kgapp").controller("homeCtrl", ['$meteor', '$state','$interval','$rootScope',
  function ($meteor, $state, $interval,$rootScope) {
    
  var vm = this;


vm.determinateValue = 0;
vm.activo = true;
vm.timer = 0;
vm.nombre = 'Hector Siso var';

if($rootScope.currentUser){
  vm.nombre = $rootScope.currentUser.profile.name;
}

$interval(function() {
        // Increment the Determinate loader
      if(vm.activo){
        vm.determinateValue += 1;
        //console.log(vm.determinateValue);
        if (vm.determinateValue > 100) {
          vm.determinateValue = 0;
        }
      }
  } , 50, 0, true);    

$interval(function() {
      vm.timer += 1; 
 
  } , 1000, 0, true); 

  vm.user = {
      name: vm.nombre,
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
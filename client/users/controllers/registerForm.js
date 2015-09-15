angular.module("kgapp").controller("RegisterFormCtrl", ['$meteor', '$state','$mdToast',
  function ($meteor, $state, $mdToast) {
    var vm = this;
 
    vm.credentials = {
      email: '',
      password: '',
      profile: {
        name: '',
        type: '',
        groups:[]
      }
    };
 
    vm.error = '';
    vm.errormsg = '';

    vm.register = function () {
      $meteor.createUser(vm.credentials).then(
        function () {
          $state.go('login');
        },
        function (err) {
          if(err.error == 403){
            vm.errormsg = 'Error de Registro - Cuenta ya existe';  
          }else{
            vm.errormsg = 'Registration error - ' + err.reason;
          }
          $mdToast.show(
              $mdToast.simple()
              .content(vm.errormsg)
              .position('top')
              .hideDelay(2000)
          );          

        }
      );
    };
  }
]);
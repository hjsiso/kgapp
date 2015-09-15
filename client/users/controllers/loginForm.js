angular.module("kgapp").controller("LoginFormCtrl", ['$meteor', '$state','$mdToast',
  function ($meteor, $state, $mdToast) {
    var vm = this;
 
    vm.credentials = {
      email: '',
      password: ''
    };
 
    vm.error = '';
    vm.errormsg = '';
    vm.login = function () {
      $meteor.loginWithPassword(vm.credentials.email, vm.credentials.password).then(
        function () {          
          $state.go('home');
        },
        function (err) {
          if(err.error == 403){
              vm.errormsg = 'Por favor, verifique sus datos de acceso ' + err.reason;
          } else{
            vm.errormsg ='Error de acceso' ;
          }   

          $mdToast.show(
              $mdToast.simple()
              .content(vm.errormsg)
              .position('top')
              .hideDelay(2000)
          );
          //vm.error = 'Login error - ' + err;
        }
      );
    };
  }
]);
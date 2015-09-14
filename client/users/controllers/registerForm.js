angular.module("kgapp").controller("RegisterFormCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    var vm = this;
 
    vm.credentials = {
      email: '',
      password: '',
      name:''
    };
 
    vm.error = '';
 
    vm.register = function () {
      $meteor.createUser(vm.credentials).then(
        function () {
          $state.go('parties');
        },
        function (err) {
          if(err.reason.indexOf("403")){
            vm.error = 'Registration error - Cuenta ya existe';  
          }else{
            vm.error = 'Registration error - ' + err;
          }
          
        }
      );
    };
  }
]);
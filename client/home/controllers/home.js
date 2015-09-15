angular.module("kgapp").controller("homeCtrl", ['$meteor', '$state',
  function ($meteor, $state) {
    if(Meteor.user() == null){
      $state.go("login");
    }
     
     
  }
]);
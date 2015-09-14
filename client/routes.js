angular.module("kgapp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {
 
    $locationProvider.html5Mode(true);
 
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/login/views/login-form.ng.html',
        controller: 'LoginFormCtrl'
      })
      .state('register', {
        url: '/register',
        templateUrl: 'client/register/views/register-form.ng.html',
        controller: 'RegisterFormCtrl'        
      });
 
    $urlRouterProvider.otherwise("/login");
  }]);
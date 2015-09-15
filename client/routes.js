angular.module("kgapp").config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function ($urlRouterProvider, $stateProvider, $locationProvider) {
 
    $locationProvider.html5Mode(true);
 
    $stateProvider
      .state('login', {
        url: '/login',
        templateUrl: 'client/users/views/login-form.ng.html',
        controller: 'LoginFormCtrl',
        controllerAs: 'lc'
      })
      .state('home', {
        url: '/home',
        templateUrl: 'client/home/views/home.ng.html',
        controller: 'homeCtrl',
        controllerAs: 'hc'     
      })      
      .state('register', {
        url: '/register',
        templateUrl: 'client/users/views/register-form.ng.html',
        controller: 'RegisterFormCtrl' ,
        controllerAs: 'rc'       
      });
 
    $urlRouterProvider.otherwise("/home");
  }]);
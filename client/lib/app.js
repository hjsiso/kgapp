angular.module('kgapp',['angular-meteor','ui.router','ngMaterial']);

angular.module('kgapp').config( function($mdThemingProvider){
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('pink');
});
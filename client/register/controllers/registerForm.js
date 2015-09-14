angular.module("kgapp").controller("RegisterFormCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
  	
	$scope.user = {
      title: 'Developer',
      email: 'ipsum@lorem.com',
      firstName: '',
      lastName: '' ,
      company: 'Google' ,
      address: '1600 Amphitheatre Pkwy' ,
      city: 'Mountain View' ,
      state: 'CA' ,
      biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
      postalCode : '94043',
      password: '',
      repassword: ''      
    };
    
  }]);
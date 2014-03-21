'use strict';

// create the module
var foursquareApp = angular.module('foursquareApp', ['ngRoute']);

//configure our routes
foursquareApp.config(function($routeProvider) {
	$routeProvider

		.when('/', {
			templateUrl : 'pages/login.html',
			controller  : 'loginController'
		})		
		
		// route for the venue page
		.when('/cVenue', {
			templateUrl : 'pages/checkinVenues.html',
			controller  : 'cVenuesController'
		})
});

// create the controller and inject Angular's $scope
foursquareApp.controller('loginController', function($scope, $http, $location, authentication) {
	
	// if user alread loged then will show venues page
	if (false) {
		
		$location.url("/cVenue");
	}	
	
	// if not user need to log
	 $scope.login = function() {
		 
		// authentication part should go here
	    if ($scope.username === 'admin' && $scope.password === 'pass') {
	    
	      authentication.isAuthenticated = true;
	      authentication.user = { name: $scope.username };
	      $location.url("/cVenue");
	      
	    } else {
	    	
	      $scope.loginError = "Invalid username/password combination";	      
	    };
	 };
});

foursquareApp.controller('cVenuesController', function($scope, authentication) {

	// create a message to display in our view
	$scope.user = authentication.user.name;
});

foursquareApp.factory('authentication', function() {
	
	 return {
	    isAuthenticated: false,
	    user: null
	 }
});


///  showing venues
/*var requestParms = {
	  clientId: "1JS1PZ5JHXN53HLJROVR3JEPWRAOV34WMQ0EAKZDLSIAWFAK",
	  clientSecret: "QAOHRPYEV3NBD3TX4WOZFAEFPCLW1TPTHWOGGL334XSPRKVK",
	  version: "20131230"
}

foursquareApp.factory('placesExplorerService', function ($resource) {
	 
    var requestUri = 'https://api.foursquare.com/v2/venues/:action';
 
    return $resource(requestUri,
    {
        action: 'explore',
        client_id: requestParms.clientId,
        client_secret: requestParms.clientSecret,
        v: requestParms.version,
        venuePhotos: '1',
        callback: 'JSON_CALLBACK'
    },
    {
        get: { method: 'JSONP' }
    });
 
});*/

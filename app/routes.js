/* global */

'use strict';

/**
 * Routes
 */
application.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider.state('home', {
		url: '/home',
		templateUrl: 'views/home/home.html',
		controller: 'HomeCtrl'
	});

	// if none of the above states are matched, use this as the fallback
	$urlRouterProvider.otherwise('/home');

});

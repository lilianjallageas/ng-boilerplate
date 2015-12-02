'use strict';

/**
 * Application Module 
 */
const appName = 'myapp';
var app = app || {};
app.Constants = angular.module('app.constants', []);
app.Controllers = angular.module('app.controllers', []);
app.Filters = angular.module('app.filters', []);
app.Services = angular.module('app.services', []);
app.Directives = angular.module('app.directives', []);
app.Models = angular.module('app.models', []);
app.Dependencies = [
	'app.constants',
	'app.controllers',
	'app.filters',
	'app.services',
	'app.directives',
	'app.models',
	'ui.router',
	'restangular'
];
var application = angular.module(appName, app.Dependencies);


/**
 * Running the Application 
 */
application.run(function ($rootScope, $location, $http, Restangular, API) {

	// Restangular : Setting the base URL of the API for the entire app
	Restangular.setBaseUrl(API.url);

});

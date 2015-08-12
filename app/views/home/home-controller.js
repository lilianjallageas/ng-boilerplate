/*
 * ---------------------------------
 * Controller 'HomeCtrl'
 * ---------------------------------
 */

// Adding to the list of Controllers of the app
app.Controllers.controller('HomeCtrl', HomeCtrl);

// Injecting the dependencies
HomeCtrl.$inject = ['$scope', 'LABELS'];

// Controller
function HomeCtrl ($scope, LABELS) {

	// Example of 'constants' usage. (See "constants.js")
	$scope.homeLabel = LABELS.HOME;

};
/* global */

'use strict';

/**
 * Provides the Global variables and Constants to the application
 */
var config_module = angular.module('$appConfig', []);

var config_data = {
	'$appConfig'              : {
		'CONST'                   : {
			// APPLICATION CONSTANTS
			'TOTO'                    : 'TOTO',
		},
	}
};

// Loading the data to the module
angular.forEach(config_data,function(key,value) {
	config_module.constant(value,key);
});

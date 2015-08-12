'use strict';
/**
 * --------------------------------------------------------------
 * Provides the Global variables and Constants to the application
 * --------------------------------------------------------------
 * 
 * Usage: 
 * 1) Add the constant as a dependency to your service/controller/directive.
 * 2) Access the properties of the constant, just like you would for an regular object.
 * 
 */

app.Constants

// ====================
// API URLS
// ====================
.constant('API', {
        'url'                       : 'https://api.xyz.com',
        'security': {
            'url'                   : 'https://security.xyz.com',
            'securityLogin'         : '/login'
        }
})

// ====================
// LABELS
// ====================
.constant('LABELS', {
   'HOME'                  : 'Home Page'
})
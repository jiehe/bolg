'use strict';

require.config({
	paths: {
		angular: './lib/angular.min',
		uiRouter: './lib/angular-ui-router.min',
		jquery:'./lib/jquery-1.9.1.min',
		jDialog:'./lib/jDialog',
		jCloud:'./lib/jqcloud-1.0.4.min',
		text: './lib/requirejs.text'
	},
	shim: {
		'angular' : {'exports' : 'angular'},
		'uiRouter': {
			deps:['angular']
		},
		'jDialog': {
			deps:['jquery'],
			'exports': 'jDialog'
		},
		'jCloud': {
			deps:['jquery']
		}
	},
	priority: [
		"angular"
	]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require( [
	'angular',
	'app',
	'routes'
], function(angular, app, routes) {
	var $html = angular.element(document.getElementsByTagName('html')[0]);

	angular.element().ready(function() {
		angular.resumeBootstrap([app['name']]);
	});
});

require.config({
    baseUrl: 'scripts',
    paths: {
		'angular': '../bower_components/angular/angular',
		'angular-route': '../bower_components/angular-route/angular-route',
		'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
		'jquery': '../bower_components/jquery/dist/jquery',
		'_': '../bower_components/underscore/underscore'
    },
	shim: {
		'app': {
			deps: ['angular', 'angular-route', 'bootstrap','_']
		},
		'angular-route': {
			deps: ['angular']
		},
		'bootstrap': {
			deps: ['jquery']
		},
		'_':{
			deps: ['jquery']
		}
	}
});

require
(
    [
        'app'
    ],
    function(app)
    {
        angular.bootstrap(document, ['app']);
    }
);
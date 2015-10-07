(function () {
    'use strict';

    angular.module('app', [
        // Angular modules
        'ui.router',              // routing
        'ui.bootstrap',           // angular ui bootstrap
        'angular-loading-bar',    // angular loading bar

        // Custom modules
        'common'                  // common functions, logger, spinner
    ])
        .config(appConfig);

    angular.module('common', []);

    appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function appConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                url: '/',
                templateUrl: 'app/main.html'
            })
            .state('main.about', {
                url: '/about',
                templateUrl: 'app/about/about.html'
            });
        $urlRouterProvider.otherwise('/');

    }
}());
(function(){
    'use strict';

    angular.module('common').directive('appHeader', appHeader);

    appHeader.$inject = [];

    function appHeader() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/header/header.directive.html'
        };
    }
}());
(function (){
    'use strict';

    angular.module('common').directive('appFooter', appFooter);

    appFooter.$inject = [];

    function appFooter() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'app/common/directives/footer/footer.directive.html'
        };
    }
}());
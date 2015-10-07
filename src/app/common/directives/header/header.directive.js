(function (){
    'use strict';

    angular.module('common').directive('appHeader', appHeader);

    appHeader.$inject = ['$state'];

    function appHeader($state) {
        return {
            restrict: 'E',
            replace: true,
            scope: {

            },
            controller: headerController,
            controllerAs: 'header',
            bindToController: true,
            templateUrl: 'app/common/directives/header/header.directive.html'
        };

        function headerController() {
            var vm = this;
            vm.navTabs = [
                {
                    url: '/',
                    name: 'Home',
                    selected: function() {
                        return $state.current.name === 'main';
                    },
                    redirect: 'main()'
                },
                {
                    url: '/about',
                    name: 'About',
                    selected: function() {
                        return $state.current.name === 'main.about';
                    },
                    redirect: 'main.about()'
                }];
        }
    }
}());
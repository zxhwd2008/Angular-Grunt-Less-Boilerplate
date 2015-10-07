(function() {
    'use strict';

    angular.module('common').factory('_', underscore);

    underscore.$inject = ['$window'];

    function underscore($window) {
        return $window._;
    }
}());
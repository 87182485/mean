/**
 * Created by Gary on 3/17/2015.
 */
(function(){
    'use strict';

    angular.module('app', ['ngResource','ngRoute']);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.when(
            '/', {
                templateUrl: 'partials/main',
                controller: 'mainCtrl',
                controllerAs: 'main'
            }
        )
    }

    angular.module('app')
        .config(config);

    //mainCtrl.$inject = ['$scope'];

    function mainCtrl(){
        var vm = this;
        vm.myVar = 'Hello Angular';
    }

    angular.module('app')
        .controller('mainCtrl', mainCtrl);
})();
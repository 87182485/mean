/**
 * Created by Gary on 3/17/2015.
 */
(function(){
    'use strict';

    angular.module('app', ['ngResource','ngRoute']);

    angular.module('app')
        .config(config);

    config.$inject = ['$locationProvider', '$routeProvider'];

    function config($locationProvider, $routeProvider){
        $locationProvider.html5Mode(true);
        $routeProvider.when(
            '/', {
                templateUrl: 'partials/main/main',
                controller: 'mainCtrl',
                controllerAs: 'main'
            }
        )
    }
})();
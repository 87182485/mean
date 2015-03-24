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
        var routeRoleCheck = {
            admin:{auth: ['auth', function(auth){
                return auth.authorizeCurrentUserForRoute('admin');
            }]}
        };

        $locationProvider.html5Mode(true);
        $routeProvider.when(
            '/', {
                templateUrl: 'partials/main/main',
                controller: 'mainCtrl',
                controllerAs: 'main'
            }
        ).when(
            '/admin/users', {
                templateUrl: 'partials/admin/users-list',
                controller: 'adminUserCtrl',
                controllerAs: 'adminUser',
                resolve:routeRoleCheck.admin
            }
        ).when(
            '/signup', {
                templateUrl: 'partials/account/signup',
                controller: 'signupCtrl',
                controllerAs: 'signup'
            }
        )
    }

    run.$inject = ['$rootScope', '$location'];

    function run($rootScope, $location){
        $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection){
            if(rejection === 'not authorized'){
                $location.path('/');
            }
        });
    }

    angular.module('app')
        .run(run);
})();
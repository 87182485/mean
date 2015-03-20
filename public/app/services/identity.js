/**
 * Created by Gary on 3/18/2015.
 */
(function(){
    'use strict';

    identity.$inject = ['$window', 'userSvc'];

    function identity($window, userSvc){
        var currentUser;

        if(!!$window.bootstrappedUserObject){
            currentUser = new userSvc();
            angular.extend(currentUser, $window.bootstrappedUserObject);
        }

        return {
            currentUser: currentUser,
            isAuthenticated:function(){
                return !!this.currentUser;
            },
            isAuthorized:function(role){
                return !!this.currentUser && this.currentUser.roles.indexOf(role)>-1
            }
        }
    }

    angular.module('app')
        .factory('identity', identity);
})();
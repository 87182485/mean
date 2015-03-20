/**
 * Created by Gary on 3/17/2015.
 */
(function(){
    'use strict';

    navLoginCtrl.$inject = ['notifier', 'identity', 'auth', '$location'];

    function navLoginCtrl(notifier, identity, auth, $location){
        var vm = this;

        vm.identity = identity;

        vm.login = function(username, password){
            auth.authenticateUser(username, password).then(function(success){
                if(success){
                    vm.username = '';
                    vm.password = '';
                    notifier.notify("Login Succeed");
                }else{
                    notifier.notify('login failed');
                }
            });
        };

        vm.logout = function(){
            auth.logout().then(function(){
                vm.identity.currentUser = undefined;
                notifier.notify("Logout Succeed");
                $location.path('/');
            });
        }
    }

    angular.module('app')
        .controller('navLoginCtrl', navLoginCtrl);
})();
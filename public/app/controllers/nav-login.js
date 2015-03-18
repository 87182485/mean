/**
 * Created by Gary on 3/17/2015.
 */
(function(){
    'use strict';

    navLoginCtrl.$inject = [];

    function navLoginCtrl(){
        var vm = this;

        vm.login = function(username, password){
            console.log('Trying Login...');
        }
    }

    angular.module('app')
        .controller('navLoginCtrl', navLoginCtrl);
})();
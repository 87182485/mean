/**
 * Created by Gary on 3/19/2015.
 */

(function(){
    'use strict';

    adminUserCtrl.$inject = ['userSvc'];

    function adminUserCtrl(userSvc){
        var vm = this;
        vm.users = userSvc.query();
    }

    angular.module('app')
        .controller('adminUserCtrl', adminUserCtrl);
})();
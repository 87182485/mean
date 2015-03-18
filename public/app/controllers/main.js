/**
 * Created by Gary on 3/17/2015.
 */
(function(){
    'use strict';

    //mainCtrl.$inject = ['$scope'];

    function mainCtrl(){
        var vm = this;
        vm.info = [
            {id:1, name:'Gary', updated:true, content:'HAHA'},
            {id:3, name:'Gary', updated:true,content:'Heihei'},
            {id:5, name:'Gary', updated:false, content:'THis is super long content, I said this is super long content, super long alright? just take it easy.'}
        ];
    }

    angular.module('app')
        .controller('mainCtrl', mainCtrl);
})();
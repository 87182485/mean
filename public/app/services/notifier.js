/**
 * Created by Gary on 3/18/2015.
 */

(function(){
    'use strict';

    angular.module('app')
        .value('toastr', toastr);

    notifier.$inject = ['toastr'];

    function notifier(toastr){
        return {
            notify:function(message){
                toastr.success(message);
            }
        }
    }

    angular.module('app')
        .factory('notifier', notifier);
})();
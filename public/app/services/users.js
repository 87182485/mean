/**
 * Created by Gary on 3/19/2015.
 */
(function(){
    "use strict";

    userSvc.$inject = ['$resource'];

    function userSvc($resource){
        var UserResource = $resource('/api/users/:id', {_id:"@id"});

        UserResource.prototype.isAdmin = function(){
            return this.roles && this.roles.indexOf('admin')>-1;
        };

        return UserResource;
    }

    angular.module('app')
        .factory('userSvc', userSvc);
})();
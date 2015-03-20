/**
 * Created by Gary on 3/18/2015.
 */
(function(){
    "use strict";

    auth.$inject = ['$http', '$q', 'identity', 'userSvc'];

    function auth($http, $q, identity, userSvc){

        function authenticateUser(username, password){
            var deferred = $q.defer();

            $http.post('/login', {username:username, password:password})
                .then(function(response){
                    if(response.data.success){
                        var user = new userSvc;
                        angular.extend(user, response.data.user);

                        identity.currentUser = user;

                        deferred.resolve(true);
                    }else{
                        deferred.resolve(false);
                    }
                }, function(err){
                    deferred.reject(err);
                });

            return deferred.promise;
        }

        function logout(){
            var deferred = $q.defer();

            $http.post('/logout', {logout:true})
                .then(function(){
                    identity.currentUser = undefined;
                    deferred.resolve();
                }, function(err){
                    console.log(err);
                    deferred.reject(err);

                });

            return deferred.promise;
        }

        function authorizeCurrentUserForRoute(role){
            if(identity.isAuthorized(role)){
                return true;
            }else{
                return $q.reject('not authorized');
            }
        }

        return {
            authenticateUser:authenticateUser,
            logout:logout,
            authorizeCurrentUserForRoute:authorizeCurrentUserForRoute
        }
    }

    angular.module('app')
        .factory('auth', auth);
})();
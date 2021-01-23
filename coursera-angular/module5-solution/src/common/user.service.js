(function() {
    'use strict';
    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        var service = this;
        var userData = null;

        service.registerUserData = function(userDetails) {
            userData = userDetails;
        };


        service.isLoggedIn = function(){
          return (userData != null);
        }


        service.getUserData = function() {
          return userData;
        };

    }
})();

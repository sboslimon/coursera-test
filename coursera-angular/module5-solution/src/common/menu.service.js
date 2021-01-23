(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var items = [];

  service.getCategories = function () {
    console.log("toto");
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItem = function(shortName){
    return $http.get(ApiPath + '/menu_items/'+shortName+'.json')
    .then(
      function (response) {
        console.log("OK");
        return response.data;
      })
      ;

  }

  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

}



})();

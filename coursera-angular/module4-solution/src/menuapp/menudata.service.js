(function () {
'use strict';

angular.module('MenuApp')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService.$inject = ['ApiBasePath', '$http']
function MenuDataService(ApiBasePath, $http) {
  var service = this;

  // List of shopping items
  var items = [];
  var itemsforcategory = [];

  service.getAllCategories = function () {
    var http_items = [];
        return $http({
          method: "GET",
          url: (ApiBasePath + "/categories.json"),
        })
        .then(function (result) {
          // process result and only keep items that match
          var http_items = result.data;
          items = [];
          for (var index = 0; index < http_items.length; index++) {
            items.push({
              name: http_items[index].name,
              short_name: http_items[index].short_name
            });
          }
          // return processed items
          return items;
        });

    return deferred.promise;
  };

  service.getItemsForCategory = function(categoryShortName) {

         return $http({
           method: "GET",
           url: (ApiBasePath + '/menu_items.json?category=' + categoryShortName),
         })
         .then(function (result) {
           // process result and only keep items that match
           var http_items = result.data.menu_items;
           items = [];
           for (var index = 0; index < http_items.length; index++) {
             items.push({
               name: http_items[index].name,
               id: http_items[index].id,
               description: http_items[index].description,
             });
           }
           // return processed items
           return items;
         });
        return deferred.promise;
      };

}

})();

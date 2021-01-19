(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'src/menuapp/items/items.template.html',
  controller: ItemsController,
  bindings: {
    items: '<'
  }
});

  ItemsController.$inject = [];
  function ItemsComponentController() {
    // var comp = this;
  }

})();

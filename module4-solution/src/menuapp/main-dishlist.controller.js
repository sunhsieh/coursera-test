(function () {
'use strict';

angular.module('MenuApp')
.controller('MainDishListController', MainDishListController);

MainDishListController.$inject = ['dishes'];
function MainDishListController(dishes) {
  var ctrl = this;
  ctrl.data = dishes.data;
}

})();

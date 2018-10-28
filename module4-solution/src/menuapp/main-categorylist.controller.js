(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['categories'];
function MainCategoryListController(categories) {
  var ctrl = this;
  ctrl.items = categories.data;

}

})();

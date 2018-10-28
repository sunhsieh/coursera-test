(function () {
'use strict';

angular.module('MenuApp')
.controller('MainCategoryListController', MainCategoryListController);


MainCategoryListController.$inject = ['categories'];
function MainCategoryListController(categories) {
  var mainList = this;
  mainList.items = categories.data;

}

})();

(function () {
'use strict';

angular.module('MenuApp')
.controller('MainItemListController', MainItemListController);

MainItemListController.$inject = ['dishes'];
function MainItemListController(dishes) {
  var mainList = this;
  mainList.data = dishes.data;
}

})();

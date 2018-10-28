(function () {
'use strict';

angular.module('MenuApp')
.component('dishesList', {
  templateUrl: 'src/itemlist/templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();

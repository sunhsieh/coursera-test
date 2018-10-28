(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'src/categorylist/templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();

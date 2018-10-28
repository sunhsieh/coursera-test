(function () {
'use strict';

angular.module('MenuApp')
.component('dishes', {
  templateUrl: 'src/menuapp/templates/dishlist.template.html',
  bindings: {
    items: '<'
  }
});

})();

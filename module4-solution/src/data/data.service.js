(function () {
'use strict';

angular.module('data')
.service('DataService', DataService);


DataService.$inject = ['$http'];
function DataService($http) {
  var service = this;


    service.getItems = function(){

      var promise = $http( {
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/categories.json',

      });
      return promise;
    };

    service.getItemsForCategory = function(categoryShortName){
      var promise = $http({
        method: 'GET',
        url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
        params: {'category': categoryShortName }
      });

      return promise;
    }
}

})();

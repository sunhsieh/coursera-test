( function(){

  'use strict';

  angular.module('NarrowItDownApp',[])
  .controller('NarrowItDownController',NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .directive('foundItems',FoundItemsDirective);

  //directive

  function FoundItemsDirective(){
    var ddo = {

      restrict : 'E',
      templateUrl : 'foundItems.html',
      controller : 'NarrowItDownController as list',
      // controllerAs : 'list',
      bindController : true,
      scope: {
        message: '<',
        foundItems : '<',
        onRemove : '&',
      },

    };
    return ddo;
  }


  // Controller
  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var menu = this;
    menu.searchTerm = "";
    menu.found = [];
    menu.message = "";

    menu.findItems = function() {
        menu.found = [];
        if (menu.searchTerm == ""){
          menu.checkFound();
        } else {
          menu.message = "Please wait while Searching...";
          var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);

          promise.then(function(response){
            menu.found = response;
            menu.checkFound();

          })
          .catch(function(error){
            menu.checkFound();
          });

        }
    }

    menu.removeItem = function(index){
      menu.found.splice(index,1);
      menu.checkFound();
    }

    menu.checkFound = function(){
      if (menu.found.length >= 1){
        menu.message = "";
      } else {
        menu.message = "Nothing found!";
      }
    }

  }

  // Menu http Service
  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){

    var service = this;

    service.getMatchedMenuItems = function(searchTerm){

      var response = $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json"
      }).then( function(result){

        var foundItems = result.data.menu_items.filter(function(item, index, array){
          return item.description.toLowerCase().match( searchTerm.toLowerCase() ) ;
        })
        return foundItems;
      });
      return response;
    }

  }






}



)();

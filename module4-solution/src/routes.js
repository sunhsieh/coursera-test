(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/categorylist/templates/home.template.html'
  })

  // Premade list page
  .state('categoryView', {
    url: '/category',
    templateUrl: 'src/categorylist/templates/main-categorylist.template.html',
    controller: 'MainCategoryListController as categoryList',
    resolve: {
      categories: ['DataService', function(DataService){
        return DataService.getItems();
      }]
    }
  })

  // Item View depends on the category short_name clicked
  .state('itemView', {
    url: '/category/{categoryShortName}',
    templateUrl: 'src/itemlist/templates/main-itemlist.template.html',
    controller: 'MainItemListController as itemList',
    resolve: {
      dishes: ['$stateParams','DataService', function($stateParams,DataService){
        return DataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  })

  ;
}

})();

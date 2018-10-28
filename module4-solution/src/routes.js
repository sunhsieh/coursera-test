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
    templateUrl: 'src/menuapp/templates/home.template.html'
  })

  // Premade list page
  .state('categoryView', {
    url: '/category',
    templateUrl: 'src/menuapp/templates/main-categorylist.template.html',
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
    templateUrl: 'src/menuapp/templates/main-dishlist.template.html',
    controller: 'MainDishListController as dishlist',
    resolve: {
      dishes: ['$stateParams','DataService', function($stateParams,DataService){
        return DataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  })

  ;
}

})();

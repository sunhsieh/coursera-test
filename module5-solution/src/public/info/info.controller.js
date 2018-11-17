(function(){

"use strict";

angular.module('public')
.controller('InfoController',InfoController);

InfoController.$inject = ['UserService', 'favDish', 'ApiPath'];
function InfoController(UserService, favDish, ApiPath ){
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.favDish = favDish;
  $ctrl.user = UserService.user;
  $ctrl.registered = UserService.registered;
}
})();

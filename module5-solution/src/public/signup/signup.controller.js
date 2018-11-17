(function(){
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);

RegistrationController.$inject = ['MenuService', 'UserService']
function RegistrationController(MenuService, UserService) {
  var $ctrl = this;
  $ctrl.regStatusSuccess = false;
  $ctrl.registered = false;
  $ctrl.checked = false;
  $ctrl.user = {};

  $ctrl.user.firstName = UserService.user.firstName;
  $ctrl.user.lastName = UserService.user.lastName;
  $ctrl.user.email = UserService.user.email;
  $ctrl.user.phone = UserService.user.phone;
  $ctrl.user.favDish = UserService.user.favDish ;


  $ctrl.register = function(){
    var promise = MenuService.getItem($ctrl.user.favDish);
    promise.then(function(response){
      $ctrl.dishExist = true;
      $ctrl.checked = true;
      $ctrl.registered = true;

      // DO Registration
      UserService.saveUserInfo($ctrl.user);


    }).catch(function(error){
      $ctrl.dishExist = false;
      $ctrl.checked = true;
    });
  }

}


})();

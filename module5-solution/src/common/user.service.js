(function () {
"use strict";

angular.module('common')
.service('UserService', UserService);

function UserService() {
  var service = this;
  var registered = false;
  service.user = {};

  service.saveUserInfo = function (user){
    service.registered = true;
    service.user = user;
  }


}



})();

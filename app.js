(function(){
'use strict';

  angular.module('MyApp', [])

  .controller('MyController', MsgController);
  MsgController.$inject = ['$scope'];
  function MsgController($scope){
    $scope.myMsg = "Hello World!";

  }




})();

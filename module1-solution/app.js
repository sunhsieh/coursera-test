(function(){
'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    //$scope.comment = "";

    $scope.PerformCheck = function(){

      if (!$scope.inputString){
        $scope.comment = "Please enter data first";
        $scope.commentColor = "#F00";
      } else {
        var lunchItems = $scope.inputString.split(",")
        if (lunchItems.length <= 3){
          $scope.comment = "Enjoy!";
        } else {
          $scope.comment = "Too much!";
        }
        $scope.commentColor = "#090";
      }


    }

  }




})();

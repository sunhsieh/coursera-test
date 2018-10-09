(function(){
'use strict';

angular.module('ShoppingListCheckOff', [] )
.controller('ToBuyController', ToBuyController )
.controller('AlreadyBoughtController', AlreadyBoughtController )
.service('ShoppingListCheckOffService', ShoppingListCheckOffService );


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuyList = this;
  toBuyList.items = ShoppingListCheckOffService.getToBuyItems();
  toBuyList.boughtItem = function(index){
    ShoppingListCheckOffService.boughtItem(index);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
}


function ShoppingListCheckOffService(){
  var service = this;
  var toBuyItems = [
    {name: "cookies", quantity: 10},
    {name: "candies", quantity: 4},
    {name: "coke", quantity: 6},
    {name: "cake", quantity: 1},
    {name: "chocolate", quantity: 2}
  ];
  var alreadyBoughtItems = [];

  service.getToBuyItems = function(){
    return toBuyItems;
  }
  service.getAlreadyBoughtItems = function(){
    return alreadyBoughtItems;
  }
  service.boughtItem = function (index){
    // Check if the index is valid
    if (toBuyItems[index]){
      //move the item from toBuyItems to alreadyBoughtItems
      var item = toBuyItems[index];
      alreadyBoughtItems.push(item);
      toBuyItems.splice(index,1);
    }
  }
}


})();

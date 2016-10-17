angular.module('app')
  .component('orderPage', {
    controller: function(Cart) {
      var vm = this;

      vm.items = Cart.getItems();

      vm.makeOrder = function() {
        alert('Спасибо за заказ!');
      }
    },
    templateUrl: 'pages/order/order.html'
  })
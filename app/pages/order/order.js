angular.module('app')
  .component('orderPage', {
    controller: function(Cart, $state) {
      var vm = this;

      vm.items = Cart.getItems();

      vm.makeOrder = function() {
        alert('Спасибо за заказ!');
        Cart.clear();
        $state.go('products');
      }
    },
    templateUrl: 'pages/order/order.html'
  })
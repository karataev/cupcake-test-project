angular.module('app')
  .component('cart', {
    controller: function(Cart, $scope, $state) {
      var vm = this;

      $scope.$watch(() => Cart.getItems(), newVal => {
        vm.items = newVal;
      });

      vm.removeItem = function(item) {
        Cart.remove(item);
      };
    },
    templateUrl: 'pages/products/cart/cart.html'
  })
angular.module('app')
  .component('cart', {
    controller: function(Cart, $scope) {
      var vm = this;

      vm.order = function() {
        console.log('order!');
      };

      $scope.$watch(() => Cart.getItems(), newVal => {
        vm.items = newVal;
      })
    },
    templateUrl: 'pages/products/cart/cart.html'
  })
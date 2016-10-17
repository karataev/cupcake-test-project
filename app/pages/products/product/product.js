angular.module('app')
  .component('product', {
    controller: function(Cart) {
      var vm = this;

      vm.amount = 1;
      vm.detailedState = false;

      vm.showDetails = () => vm.detailedState = true;
      vm.hideDetails = () => vm.detailedState = false;

      vm.addToCart = function() {
        Cart.add(vm.data, vm.amount);
      };
    },
    bindings: {
      data: '='
    },
    templateUrl: 'pages/products/product/product.html'
  })
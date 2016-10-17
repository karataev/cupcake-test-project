angular.module('app')
  .component('productsPage', {
    controller: function(Products) {
      var vm = this;

      Products.fetchAll()
        .then(function(products) {
          vm.products = products;
        })
    },
    templateUrl: 'pages/products/products.html'
  })

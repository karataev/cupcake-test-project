angular.module('app')
  .factory('Cart', function() {

    var items = [];

    function getItemByProduct(product) {
      return _.find(items, {product: product});
    }

    function add(product, amount) {
      var itemInCart = getItemByProduct(product);
      if (itemInCart) {
        itemInCart.amount += amount;
      } else {
        items.push({
          product: product,
          amount: amount
        })
      }
    }

    return {
      add: add,
      getItems: () => items
    }
  })
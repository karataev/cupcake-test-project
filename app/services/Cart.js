angular.module('app')
  .factory('Cart', function() {

    var items = [];

    function getItemByProductId(id) {
      return _.find(items, (item) => item.product.id === id);
    }

    function add(product, amount) {
      var itemInCart = getItemByProductId(product.id);
      if (itemInCart) {
        itemInCart.amount += amount;
      } else {
        items.push({
          product: product,
          amount: amount
        })
      }
    }

    function remove(item) {
      var index = items.indexOf(item);
      items.splice(index, 1);
    }

    return {
      add: add,
      remove: remove,
      getItems: () => items
    }
  })
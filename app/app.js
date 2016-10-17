
angular.module('templates', []);
var app = angular.module('app', ['templates', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  var productsState = {
    name: 'products',
    url: '/products',
    template: '<products-page></products-page>'
  };
  var orderState = {
    name: 'order',
    url: '/order',
    template: '<order-page></order-page>'
  };

  $stateProvider.state(productsState);
  $stateProvider.state(orderState);

  $urlRouterProvider.otherwise('/products');
});
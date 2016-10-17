
angular.module('templates', []);
var app = angular.module('app', ['templates', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  var productsState = {
    name: 'products',
    url: '/products',
    template: '<products-page></products-page>'
  };

  $stateProvider.state(productsState);

  $urlRouterProvider.otherwise('/products');
});
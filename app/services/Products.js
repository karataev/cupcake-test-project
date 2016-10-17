angular.module('app')
  .factory('Products', function($http) {
    var url = 'https://jsonplaceholder.typicode.com/photos';
    var data;

    function fetchAll() {
      return $http.get(url)
        .then(function(res) {
          // 10 items for this project is enough
          data = res.data.slice(0, 10);
          return data;
        })
    }

    return {
      fetchAll: fetchAll
    }
  })

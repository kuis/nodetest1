myApp.factory('userService', function($http, $log, $q) {
  return {
    getUsers: function() {
      var deferred = $q.defer();
      $http.get('/api/v1/users/')
       .success(function(users) {
          deferred.resolve(users);
       }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
       });
     return deferred.promise;
    }
  }
});

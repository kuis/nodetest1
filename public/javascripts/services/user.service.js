mainApp.factory('UserService', function($http, $log, $q) {
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
    },
    addUser: function(user) {
      var deferred = $q.defer();
      $http.post('/api/v1/users/create', user)
        .success(function(user) {
          deferred.resolve(user);
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    },
    updateUser: function(id, user) {
      var deferred = $q.defer();
      $http.put('/api/v1/users/' + id, user)
        .success(function(user) {
          deferred.resolve(user);
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    },
    editUser: function(id) {
      var deferred = $q.defer();
      $http.get('/api/v1/users/' + id)
        .success(function(user) {
          deferred.resolve(user);
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    },
    deleteUser: function(id) {
      var deferred = $q.defer();
      $http.delete('/api/v1/users/' + id)
        .success(function(user) {
          deferred.resolve(user);
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    }
  }
});

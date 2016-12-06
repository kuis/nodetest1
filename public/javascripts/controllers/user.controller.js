'use strict';

mainApp.controller('UserController', ['$scope', '$http', '$stateParams', '$state', '$window', function($scope, $http, $stateParams, $state, $window) {
  // variables
  $scope.users = [];
  $scope.pageState = $stateParams.pageState;

  // functions
  function getUsers() {
    $http.get('/api/v1/users').then(
      function(users) {
        console.log(users);
        $scope.users = users;
      },
      function(error) {
        console.log(error);
      });
  }

  function addUser() {
    $http.post('/api/v1/users/create', $scope.user).then(
      function(user) {
        console.log('addUser');
        console.log(user);
        $scope.pageState = "users";
        init();
        $state.go('users.list', {reload: true});
      },
      function(error) {
        console.log(error);
      });
  }

  function init() {
    console.log('init');
    getUsers();
  }

  function updateUser(id) {
    $http.put('/api/v1/users/' + id, $scope.user).then(
      function(user) {
        console.log('updateUser');
        console.log(user);
        $scope.pageState = "users";
        $state.go('users.list');
      },
      function(error) {
        console.log(error);
      });
  }

  function editUser(id) {
    $http.get('/api/v1/users/' + id).then(
      function(user) {
        console.log(user);
        $scope.user = user.data;
        $scope.pageState = "users.edit";
      },
      function(error) {
        console.log(error);
      });
  }

  function deleteUser(id) {
    var deleteUser = $window.confirm('Are you sure you want to delete the Ad?');
    if (deleteUser) {
      $http.delete('/api/v1/users/' + id).then(
      function(user) {
        getUsers();
      },
      function(error) {
        console.log(error);
      });
    }

  }

  $scope.init = init;
  $scope.getUsers = getUsers;
  $scope.addUser = addUser;
  $scope.updateUser = updateUser;
  $scope.editUser = editUser;
  $scope.deleteUser = deleteUser;
}]);
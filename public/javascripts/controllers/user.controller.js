'use strict';

mainApp.controller('UserController', ['$scope', '$http', '$stateParams', '$state', '$window', 'UserService', '$log', function($scope, $http, $stateParams, $state, $window, UserService, $log) {
  // variables
  $scope.users = [];
  $scope.pageState = $stateParams.pageState;

  // functions
  function getUsers() {
    UserService.getUsers().then(
      function(users) {
        $log.log(users);
        $scope.users = users;
      },
      function(error) {
        $log.error(error);
      });
  }

  function addUser() {
    UserService.addUser($scope.user).then(
      function(user) {
        debugger;
        $log.log(user);
        $scope.pageState = "users";
        init();
        $state.go("users.list", {reload: true});
      },
      function(error) {
        $log.error(error);
      });
  }

  function init() {
    getUsers();
  }

  function updateUser(id) {
    UserService.updateUser(id, $scope.user).then(
      function(user) {
        debugger;
        $log.log(user);
        $scope.pageState = "users";
        $state.go("users.list");
      },
      function(error) {
        $log.log(error);
      });
  }

  function editUser(id) {
    UserService.editUser(id).then(
      function(user) {
        debugger;
        $log.log(user);
        $scope.user = user;
        $scope.pageState = "users.edit";
      },
      function(error) {
        $log.log(error);
      })
  }

  function deleteUser(id) {
    var deleteUser = $window.confirm('Are you sure you want to delete the Ad?');
    if (deleteUser) {
      UserService.deleteUser(id).then(
        function(user) {
          debugger;
          getUsers();
        },
        function(error) {
          $log.log(error);
        });
    }
  }

  $scope.getUsers = getUsers;
  $scope.addUser = addUser;
  $scope.updateUser = updateUser;
  $scope.editUser = editUser;
  $scope.deleteUser = deleteUser;

  init();
}]);
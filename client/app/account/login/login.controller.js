'use strict';

angular.module('hpsApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};
    $scope.errors = {};

    $scope.login = function(form) {
      $scope.submitted = true;

      if(form.$valid) {
        Auth.login({
          email: $scope.user.username,
          password: $scope.user.password
        })
        .then( function() {
          // Logged in, redirect to admin
          $location.path('/admin');
        })
        .catch( function(err) {
          $scope.errors.other = err.message;
        });
      }
    };

  });

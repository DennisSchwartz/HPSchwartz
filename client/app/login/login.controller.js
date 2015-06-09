'use strict';

angular.module('hpsApp')
  .controller('LoginCtrl', function ($scope, Auth, $location) {
    $scope.user = {};

    $scope.login = function (form) {
      $scope.submitted = true;
      //TODO: Validate Form input!
      Auth.login({
        username: $scope.user.name,
        password: $scope.user.password
      })
        .then( function() {
          // Redirect to admin site
          $location.path('/admin');
        })
        .catch( function(err) {
          console.log('Error logging in!');
          //$scope.errors.other = err.message;
          console.log(err.message);
        });
    };
  });

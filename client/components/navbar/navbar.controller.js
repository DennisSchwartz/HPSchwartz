'use strict';

angular.module('hpsApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '#home'
    }, {
      'title': 'Übersicht',
      'link': '#portfolio'
    }, {
      'title': 'Praxis',
      'link': '#concept'
    }, {
      'title': 'News',
      'link': '#news'
    }, {
      'title': 'Anfahrt',
      'link': '#map'
    }, {
      'title': 'Galerie',
      'link': '#gallery'
    }, {
      'title': 'Kosten',
      'link': '#cost'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

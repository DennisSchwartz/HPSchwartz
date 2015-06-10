'use strict';

angular.module('hpsApp')
  .controller('NewsCtrl', function ($scope, $http, socket) {

    $scope.posts = [];
    $scope.numPosts = 2;

    $scope.tatoolbar = [
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'quote'],
      ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent']
    ];


    $http.get('/api/posts').success(function (posts) {
      $scope.posts = posts;
      $scope.currentPost = posts[0];
      socket.syncUpdates('post', $scope.posts);
    });


    $scope.incNumPosts = function () {
      $scope.numPosts += 2;
      if ($scope.numPosts > scope.posts.length) {
        $scope.numPosts = scope.posts.length;
      }
    };

    $scope.resetNumPosts = function () {
      $scope.numPosts = 2;
    };
  });

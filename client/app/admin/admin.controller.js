'use strict';

angular.module('hpsApp')
  .controller('AdminCtrl', function ($scope, $http, socket, User) {
    $scope.posts = [];
    $scope.currentPost = {};
    $scope.post = {};
    $scope.numPosts = 2;

    $scope.tatoolbar = [
      ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'quote'],
      ['bold', 'italics', 'underline', 'strikeThrough', 'ul', 'ol', 'redo', 'undo', 'clear'],
      ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent']
    ];

    var defaultPost = {
      title : "",
      body : "",
      date: ""
    };

    $scope.clearForm = function() {
      $scope.form.$setPristine();
      $scope.post = defaultPost;
    };

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
      $scope.currentPost = posts[0];
      socket.syncUpdates('post', $scope.posts);
    });

    $scope.newPost = function(form) {
      if (form.$valid) {
        $scope.post.date = new Date();
        $http.post('/api/posts', $scope.post).success(function() {
          $scope.clearForm();
          console.log('Test!');
          $scope.message = 'Successful posts!';
          socket.syncUpdates('post', $scope.posts);
        });
      }
    };

    $scope.incNumPosts = function() {
      $scope.numPosts += 5;
    };

    $scope.resetNumPosts = function() {
      $scope.numPosts = 2;
    };

  });

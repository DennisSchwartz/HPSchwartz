'use strict';

angular.module('hpsApp')
  .controller('MainCtrl', function ($scope, $http, $document, socket) {


    /*===================================================================================*/
    /*	LIGHTBOX
     /*===================================================================================*/
    $document.ready(function() {
      $('.lightbox').magnificPopup({type:'image'});
    });

    $scope.posts = [];
    $scope.currentPost = [];
    $scope.numPosts = 2;

    $http.get('/api/posts').success(function(posts) {
      $scope.posts = posts;
      $scope.currentPost = posts[0];
      socket.syncUpdates('post', $scope.posts);
    });

    //$scope.addThing = function() {
    //  if($scope.newThing === '') {
    //    return;
    //  }
    //  $http.post('/api/things', { name: $scope.newThing });
    //  $scope.newThing = '';
    //};
    //
    //$scope.deleteThing = function(thing) {
    //  $http.delete('/api/things/' + thing._id);
    //};
    //
    //$scope.$on('$destroy', function () {
    //  socket.unsyncUpdates('thing');
    //});
  });

'use strict';

angular.module('hpsApp')
  .directive('resize', function ($window) {
    return function (scope, element, attr) {

      var w = angular.element($window);
      scope.$watch(function () {
        return {
          'h': w.height(),
          'w': w.width()
        };
      }, function (newValue, oldValue) {
        scope.$eval(attr.notifier);
        scope.small = newValue.w <= 767;
      }, true);

      w.bind('resize', function () {
        scope.$apply();
      });
    }
  });

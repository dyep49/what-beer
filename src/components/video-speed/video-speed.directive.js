module.exports = function($timeout) {
  'use strict';
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function() {
        element.playbackRate = 0.75;
      }, 1000)
    }
  }
}
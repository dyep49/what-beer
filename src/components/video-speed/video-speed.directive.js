'use strict';

module.exports = function($timeout) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function() {
        element.playbackRate = 0.75;
      }, 1000)
    }
  }
}
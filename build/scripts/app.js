(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('angular');
require('angular-ui-router');

var app = angular.module('whatbeer', [
  'ui.router',
]);

require('./components');
require('./routes');
// require('./helpers');
// require('./services');

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'HomeController',
      templateUrl: 'src/routes/home/home.template.html'
    })

  $urlRouterProvider.otherwise('/');
}]);



},{"./components":3,"./routes":7,"angular":"angular","angular-ui-router":"angular-ui-router"}],2:[function(require,module,exports){
'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    templateUrl: 'src/components/header-nav/header-nav.template.html',
    scope: {},
    link: function(scope, element) {
      
    }
  }
}
},{}],3:[function(require,module,exports){
'use strict';

var app = angular.module('whatbeer');

app.directive('headerNav', require('./header-nav/header-nav.directive'));
app.directive('panel', require('./panel/panel.directive'));
app.directive('slowVid', require('./video-speed/video-speed.directive'));
},{"./header-nav/header-nav.directive":2,"./panel/panel.directive":4,"./video-speed/video-speed.directive":5}],4:[function(require,module,exports){
'use strict';

module.exports = function() {
  return {
    restrict: 'E',
    templateUrl: 'src/components/panel/panel.template.html',
    scope: {},
    link: function(scope, element) {
      
    }
  }
}
},{}],5:[function(require,module,exports){
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
},{}],6:[function(require,module,exports){
'use strict';

module.exports = function($scope) {


  $scope.test = "whatever";
  
}
},{}],7:[function(require,module,exports){
'use strict';
var app = angular.module('whatbeer');

app.controller('HomeController', require('./home/home.controller'));


},{"./home/home.controller":6}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmRpcmVjdGl2ZS5qcyIsInNyYy9jb21wb25lbnRzL2luZGV4LmpzIiwic3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuZGlyZWN0aXZlLmpzIiwic3JjL2NvbXBvbmVudHMvdmlkZW8tc3BlZWQvdmlkZW8tc3BlZWQuZGlyZWN0aXZlLmpzIiwic3JjL3JvdXRlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsInNyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCdhbmd1bGFyJyk7XG5yZXF1aXJlKCdhbmd1bGFyLXVpLXJvdXRlcicpO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3doYXRiZWVyJywgW1xuICAndWkucm91dGVyJyxcbl0pO1xuXG5yZXF1aXJlKCcuL2NvbXBvbmVudHMnKTtcbnJlcXVpcmUoJy4vcm91dGVzJyk7XG4vLyByZXF1aXJlKCcuL2hlbHBlcnMnKTtcbi8vIHJlcXVpcmUoJy4vc2VydmljZXMnKTtcblxuYXBwLmNvbmZpZyhbJyRzdGF0ZVByb3ZpZGVyJywgJyR1cmxSb3V0ZXJQcm92aWRlcicsIGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblxuICAkc3RhdGVQcm92aWRlclxuICAgIC5zdGF0ZSgnaG9tZScsIHtcbiAgICAgIHVybDogJy8nLFxuICAgICAgY29udHJvbGxlcjogJ0hvbWVDb250cm9sbGVyJyxcbiAgICAgIHRlbXBsYXRlVXJsOiAnc3JjL3JvdXRlcy9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCdcbiAgICB9KVxuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1dKTtcblxuXG4iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb21wb25lbnRzL2hlYWRlci1uYXYvaGVhZGVyLW5hdi50ZW1wbGF0ZS5odG1sJyxcbiAgICBzY29wZToge30sXG4gICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpIHtcbiAgICAgIFxuICAgIH1cbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd3aGF0YmVlcicpO1xuXG5hcHAuZGlyZWN0aXZlKCdoZWFkZXJOYXYnLCByZXF1aXJlKCcuL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5kaXJlY3RpdmUnKSk7XG5hcHAuZGlyZWN0aXZlKCdwYW5lbCcsIHJlcXVpcmUoJy4vcGFuZWwvcGFuZWwuZGlyZWN0aXZlJykpO1xuYXBwLmRpcmVjdGl2ZSgnc2xvd1ZpZCcsIHJlcXVpcmUoJy4vdmlkZW8tc3BlZWQvdmlkZW8tc3BlZWQuZGlyZWN0aXZlJykpOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwudGVtcGxhdGUuaHRtbCcsXG4gICAgc2NvcGU6IHt9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICBcbiAgICB9XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oJHRpbWVvdXQpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0EnLFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50LCBhdHRycykge1xuICAgICAgJHRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGVsZW1lbnQucGxheWJhY2tSYXRlID0gMC43NTtcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCRzY29wZSkge1xuXG5cbiAgJHNjb3BlLnRlc3QgPSBcIndoYXRldmVyXCI7XG4gIFxufSIsIid1c2Ugc3RyaWN0JztcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInKTtcblxuYXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9ob21lL2hvbWUuY29udHJvbGxlcicpKTtcblxuIl19

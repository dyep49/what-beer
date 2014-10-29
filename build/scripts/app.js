(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('angular');
require('angular-ui-router');
require('angular-scroll');

var app = angular.module('whatbeer', [
  'ui.router',
  'duScroll'
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



},{"./components":3,"./routes":7,"angular":"angular","angular-scroll":"angular-scroll","angular-ui-router":"angular-ui-router"}],2:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmRpcmVjdGl2ZS5qcyIsInNyYy9jb21wb25lbnRzL2luZGV4LmpzIiwic3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuZGlyZWN0aXZlLmpzIiwic3JjL2NvbXBvbmVudHMvdmlkZW8tc3BlZWQvdmlkZW8tc3BlZWQuZGlyZWN0aXZlLmpzIiwic3JjL3JvdXRlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsInNyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnYW5ndWxhcicpO1xucmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbnJlcXVpcmUoJ2FuZ3VsYXItc2Nyb2xsJyk7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInLCBbXG4gICd1aS5yb3V0ZXInLFxuICAnZHVTY3JvbGwnXG5dKTtcblxucmVxdWlyZSgnLi9jb21wb25lbnRzJyk7XG5yZXF1aXJlKCcuL3JvdXRlcycpO1xuLy8gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG4vLyByZXF1aXJlKCcuL3NlcnZpY2VzJyk7XG5cbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9yb3V0ZXMvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWwnXG4gICAgfSlcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XSk7XG5cblxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4ge1xuICAgIHJlc3RyaWN0OiAnRScsXG4gICAgdGVtcGxhdGVVcmw6ICdzcmMvY29tcG9uZW50cy9oZWFkZXItbmF2L2hlYWRlci1uYXYudGVtcGxhdGUuaHRtbCcsXG4gICAgc2NvcGU6IHt9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICBcbiAgICB9XG4gIH1cbn0iLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInKTtcblxuYXBwLmRpcmVjdGl2ZSgnaGVhZGVyTmF2JywgcmVxdWlyZSgnLi9oZWFkZXItbmF2L2hlYWRlci1uYXYuZGlyZWN0aXZlJykpO1xuYXBwLmRpcmVjdGl2ZSgncGFuZWwnLCByZXF1aXJlKCcuL3BhbmVsL3BhbmVsLmRpcmVjdGl2ZScpKTtcbmFwcC5kaXJlY3RpdmUoJ3Nsb3dWaWQnLCByZXF1aXJlKCcuL3ZpZGVvLXNwZWVkL3ZpZGVvLXNwZWVkLmRpcmVjdGl2ZScpKTsiLCIndXNlIHN0cmljdCc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdFJyxcbiAgICB0ZW1wbGF0ZVVybDogJ3NyYy9jb21wb25lbnRzL3BhbmVsL3BhbmVsLnRlbXBsYXRlLmh0bWwnLFxuICAgIHNjb3BlOiB7fSxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCkge1xuICAgICAgXG4gICAgfVxuICB9XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCR0aW1lb3V0KSB7XG4gIHJldHVybiB7XG4gICAgcmVzdHJpY3Q6ICdBJyxcbiAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCwgYXR0cnMpIHtcbiAgICAgICR0aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBlbGVtZW50LnBsYXliYWNrUmF0ZSA9IDAuNzU7XG4gICAgICB9LCAxMDAwKVxuICAgIH1cbiAgfVxufSIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuXG4gICRzY29wZS50ZXN0ID0gXCJ3aGF0ZXZlclwiO1xuICBcbn0iLCIndXNlIHN0cmljdCc7XG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3doYXRiZWVyJyk7XG5cbmFwcC5jb250cm9sbGVyKCdIb21lQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vaG9tZS9ob21lLmNvbnRyb2xsZXInKSk7XG5cbiJdfQ==

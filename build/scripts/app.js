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
    .state('beta', {
      url: '/beta',
      controller: 'BetaController',
      templateUrl: 'src/routes/beta/beta.template.html'
    });

  $urlRouterProvider.otherwise('/');
}]);



},{"./components":3,"./routes":8,"angular":"angular","angular-scroll":"angular-scroll","angular-ui-router":"angular-ui-router"}],2:[function(require,module,exports){

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
  };
};
},{}],5:[function(require,module,exports){
module.exports=require(2)
},{"/Users/traveler/Projects/what-beer/src/components/header-nav/header-nav.directive.js":2}],6:[function(require,module,exports){
module.exports=require(2)
},{"/Users/traveler/Projects/what-beer/src/components/header-nav/header-nav.directive.js":2}],7:[function(require,module,exports){
'use strict';

module.exports = function($scope) {


  $scope.test = "whatever";
  
};
},{}],8:[function(require,module,exports){
'use strict';
var app = angular.module('whatbeer');

app.controller('HomeController', require('./home/home.controller'));
app.controller('BetaController', require('./beta/beta.controller'));

},{"./beta/beta.controller":6,"./home/home.controller":7}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL2NvbXBvbmVudHMvaGVhZGVyLW5hdi9oZWFkZXItbmF2LmRpcmVjdGl2ZS5qcyIsInNyYy9jb21wb25lbnRzL2luZGV4LmpzIiwic3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuZGlyZWN0aXZlLmpzIiwic3JjL3JvdXRlcy9ob21lL2hvbWUuY29udHJvbGxlci5qcyIsInNyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnYW5ndWxhcicpO1xucmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbnJlcXVpcmUoJ2FuZ3VsYXItc2Nyb2xsJyk7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInLCBbXG4gICd1aS5yb3V0ZXInLFxuICAnZHVTY3JvbGwnXG5dKTtcblxucmVxdWlyZSgnLi9jb21wb25lbnRzJyk7XG5yZXF1aXJlKCcuL3JvdXRlcycpO1xuLy8gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG4vLyByZXF1aXJlKCcuL3NlcnZpY2VzJyk7XG5cbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9yb3V0ZXMvaG9tZS9ob21lLnRlbXBsYXRlLmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoJ2JldGEnLCB7XG4gICAgICB1cmw6ICcvYmV0YScsXG4gICAgICBjb250cm9sbGVyOiAnQmV0YUNvbnRyb2xsZXInLFxuICAgICAgdGVtcGxhdGVVcmw6ICdzcmMvcm91dGVzL2JldGEvYmV0YS50ZW1wbGF0ZS5odG1sJ1xuICAgIH0pO1xuXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1dKTtcblxuXG4iLG51bGwsIid1c2Ugc3RyaWN0JztcblxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd3aGF0YmVlcicpO1xuXG5hcHAuZGlyZWN0aXZlKCdoZWFkZXJOYXYnLCByZXF1aXJlKCcuL2hlYWRlci1uYXYvaGVhZGVyLW5hdi5kaXJlY3RpdmUnKSk7XG5hcHAuZGlyZWN0aXZlKCdwYW5lbCcsIHJlcXVpcmUoJy4vcGFuZWwvcGFuZWwuZGlyZWN0aXZlJykpO1xuYXBwLmRpcmVjdGl2ZSgnc2xvd1ZpZCcsIHJlcXVpcmUoJy4vdmlkZW8tc3BlZWQvdmlkZW8tc3BlZWQuZGlyZWN0aXZlJykpOyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHtcbiAgICByZXN0cmljdDogJ0UnLFxuICAgIHRlbXBsYXRlVXJsOiAnc3JjL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwudGVtcGxhdGUuaHRtbCcsXG4gICAgc2NvcGU6IHt9LFxuICAgIGxpbms6IGZ1bmN0aW9uKHNjb3BlLCBlbGVtZW50KSB7XG4gICAgICBcbiAgICB9XG4gIH07XG59OyIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigkc2NvcGUpIHtcblxuXG4gICRzY29wZS50ZXN0ID0gXCJ3aGF0ZXZlclwiO1xuICBcbn07IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd3aGF0YmVlcicpO1xuXG5hcHAuY29udHJvbGxlcignSG9tZUNvbnRyb2xsZXInLCByZXF1aXJlKCcuL2hvbWUvaG9tZS5jb250cm9sbGVyJykpO1xuYXBwLmNvbnRyb2xsZXIoJ0JldGFDb250cm9sbGVyJywgcmVxdWlyZSgnLi9iZXRhL2JldGEuY29udHJvbGxlcicpKTtcbiJdfQ==

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('angular');
require('angular-ui-router');
require('angular-scroll');

require('../partials/partials.min')

var app = angular.module('whatbeer', [
  'ui.router',
  'duScroll',
  'partials'
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
      templateUrl: 'src/scripts/routes/home/home.template.html'
    })
    .state('beta', {
      url: '/beta',
      controller: 'BetaController',
      templateUrl: 'src/scripts/routes/beta/beta.template.html'
    });

  $urlRouterProvider.otherwise('/');
}]);



},{"../partials/partials.min":2,"./components":4,"./routes":9,"angular":"angular","angular-scroll":"angular-scroll","angular-ui-router":"angular-ui-router"}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
module.exports=require(2)
},{"/Users/traveler/Projects/what-beer/src/partials/partials.min.js":2}],4:[function(require,module,exports){
'use strict';

var app = angular.module('whatbeer');

app.directive('headerNav', require('./header-nav/header-nav.directive'));
app.directive('panel', require('./panel/panel.directive'));
app.directive('slowVid', require('./video-speed/video-speed.directive'));
},{"./header-nav/header-nav.directive":3,"./panel/panel.directive":5,"./video-speed/video-speed.directive":6}],5:[function(require,module,exports){
module.exports=require(2)
},{"/Users/traveler/Projects/what-beer/src/partials/partials.min.js":2}],6:[function(require,module,exports){
module.exports=require(2)
},{"/Users/traveler/Projects/what-beer/src/partials/partials.min.js":2}],7:[function(require,module,exports){
module.exports = /* @ngInject */ function() {
  'use strict';

};
},{}],8:[function(require,module,exports){
module.exports=require(7)
},{"/Users/traveler/Projects/what-beer/src/scripts/routes/beta/beta.controller.js":7}],9:[function(require,module,exports){
'use strict';
var app = angular.module('whatbeer');

app.controller('HomeController', require('./home/home.controller'));
app.controller('BetaController', require('./beta/beta.controller'));

},{"./beta/beta.controller":7,"./home/home.controller":8}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvc2NyaXB0cy9hcHAuanMiLCJzcmMvcGFydGlhbHMvcGFydGlhbHMubWluLmpzIiwic3JjL3NjcmlwdHMvY29tcG9uZW50cy9pbmRleC5qcyIsInNyYy9zY3JpcHRzL3JvdXRlcy9iZXRhL2JldGEuY29udHJvbGxlci5qcyIsInNyYy9zY3JpcHRzL3JvdXRlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBOzs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOzs7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnYW5ndWxhcicpO1xucmVxdWlyZSgnYW5ndWxhci11aS1yb3V0ZXInKTtcbnJlcXVpcmUoJ2FuZ3VsYXItc2Nyb2xsJyk7XG5cbnJlcXVpcmUoJy4uL3BhcnRpYWxzL3BhcnRpYWxzLm1pbicpXG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInLCBbXG4gICd1aS5yb3V0ZXInLFxuICAnZHVTY3JvbGwnLFxuICAncGFydGlhbHMnXG5dKTtcblxucmVxdWlyZSgnLi9jb21wb25lbnRzJyk7XG5yZXF1aXJlKCcuL3JvdXRlcycpO1xuLy8gcmVxdWlyZSgnLi9oZWxwZXJzJyk7XG4vLyByZXF1aXJlKCcuL3NlcnZpY2VzJyk7XG5cbmFwcC5jb25maWcoWyckc3RhdGVQcm92aWRlcicsICckdXJsUm91dGVyUHJvdmlkZXInLCBmdW5jdGlvbigkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSB7XG5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2hvbWUnLCB7XG4gICAgICB1cmw6ICcvJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdIb21lQ29udHJvbGxlcicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9zY3JpcHRzL3JvdXRlcy9ob21lL2hvbWUudGVtcGxhdGUuaHRtbCdcbiAgICB9KVxuICAgIC5zdGF0ZSgnYmV0YScsIHtcbiAgICAgIHVybDogJy9iZXRhJyxcbiAgICAgIGNvbnRyb2xsZXI6ICdCZXRhQ29udHJvbGxlcicsXG4gICAgICB0ZW1wbGF0ZVVybDogJ3NyYy9zY3JpcHRzL3JvdXRlcy9iZXRhL2JldGEudGVtcGxhdGUuaHRtbCdcbiAgICB9KTtcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlKCcvJyk7XG59XSk7XG5cblxuIixudWxsLCIndXNlIHN0cmljdCc7XG5cbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInKTtcblxuYXBwLmRpcmVjdGl2ZSgnaGVhZGVyTmF2JywgcmVxdWlyZSgnLi9oZWFkZXItbmF2L2hlYWRlci1uYXYuZGlyZWN0aXZlJykpO1xuYXBwLmRpcmVjdGl2ZSgncGFuZWwnLCByZXF1aXJlKCcuL3BhbmVsL3BhbmVsLmRpcmVjdGl2ZScpKTtcbmFwcC5kaXJlY3RpdmUoJ3Nsb3dWaWQnLCByZXF1aXJlKCcuL3ZpZGVvLXNwZWVkL3ZpZGVvLXNwZWVkLmRpcmVjdGl2ZScpKTsiLCJtb2R1bGUuZXhwb3J0cyA9IC8qIEBuZ0luamVjdCAqLyBmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG59OyIsIid1c2Ugc3RyaWN0JztcbnZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnd2hhdGJlZXInKTtcblxuYXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgcmVxdWlyZSgnLi9ob21lL2hvbWUuY29udHJvbGxlcicpKTtcbmFwcC5jb250cm9sbGVyKCdCZXRhQ29udHJvbGxlcicsIHJlcXVpcmUoJy4vYmV0YS9iZXRhLmNvbnRyb2xsZXInKSk7XG4iXX0=

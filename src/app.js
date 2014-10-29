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



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



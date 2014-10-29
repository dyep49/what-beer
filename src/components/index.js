'use strict';

var app = angular.module('whatbeer');

app.directive('headerNav', require('./header-nav/header-nav.directive'));
app.directive('panel', require('./panel/panel.directive'));
app.directive('slowVid', require('./video-speed/video-speed.directive'));
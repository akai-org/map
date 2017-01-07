define(['./LandingPageCtrl'],
       function(LandingPageCtrl) {
  'use strict';

  var landingModule = angular.module('landing-module', ['ui.router']);

  landingModule.controller('LandingPageCtrl', ['$scope', LandingPageCtrl]);

  landingModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('landing', {
        url: '',
        controller: 'LandingPageCtrl',
        templateUrl: 'landing/landing.html'
      });
  }]);

  return landingModule;
});

define(['./LandingPageCtrl'],
       function(LandingPageCtrl) {
  'use strict';

  var landingModule = angular.module('landing-module', ['ui.router']);

  landingModule.controller('LandingPageCtrl', ['$scope', LandingPageCtrl]);

  landingModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('abstractLanding', {
        abstract: true,
        controller: 'LandingPageCtrl',
        templateUrl: 'landing/landing.html'
      })
      .state('abstractLanding.empty-landing', {
        url: ''
      })
      .state('abstractLanding.landing', {
        url: '/'
      });
  }]);

  return landingModule;
});

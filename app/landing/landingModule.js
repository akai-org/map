define(['./landingPageCtrl'],
       function(LandingPageCtrl) {
  'use strict';

  var landingModule = angular.module('landing-module', ['ui.router']);

  landingModule.controller('landingPageCtrl', ['$scope', LandingPageCtrl]);

  landingModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('abstractLanding', {
        abstract: true,
        controller: 'landingPageCtrl',
        templateUrl: 'html/landing/landing.html'
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

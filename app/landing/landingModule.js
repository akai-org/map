define(['./landingPageCtrl'],
       function(LandingPageCtrl) {
  'use strict';

  var landingModule = angular.module('landing-module', ['ui.router',
                                                        'algoliasearch']);

  landingModule.controller('landingPageCtrl', ['$scope', '$state', '$rootScope', 'algolia', LandingPageCtrl]);

  landingModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('abstractLanding', {
        abstract: true,
        controller: 'landingPageCtrl',
        templateUrl: 'html/landing/landing.html'
      })
      .state('abstractLanding.empty-landing', {
        url: '',
          params: {
            landingPageView: true
          }
      })
      .state('abstractLanding.landing', {
        url: '/',
          params: {
              landingPageView: true
          }
      });
  }]);

  return landingModule;
});

define(['./buildingsCtrl'],
  function(BuildingsCtrl) {
    'use strict';

    var landingModule = angular.module('buildings-module', ['ui.router']);

    landingModule.controller('BuildingsCtrl', ['$scope', BuildingsCtrl]);

    landingModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('buildings', {
          url: '',
          controller: 'BuildingsCtrl',
          templateUrl: 'buildings/buildings.html'
        });
    }]);

    return landingModule;
  });

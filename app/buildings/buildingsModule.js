define(['./buildingsCtrl'],
  function(BuildingsCtrl) {
    'use strict';

    var buildingsModule = angular.module('buildings-module', ['ui.router', 'leaflet-directive']);

    buildingsModule.controller('BuildingsCtrl', ['$scope', BuildingsCtrl]);

    buildingsModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('buildings', {
          url: '/buildings',
          controller: 'BuildingsCtrl',
          templateUrl: 'html/buildings/buildings.html'
        });
    }]);

    return buildingsModule;
  });

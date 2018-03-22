define(['./buildingsCtrl',
        './floorsCtrl'],
  function(BuildingsCtrl,
           FloorsCtrl) {
    'use strict';

    var buildingsModule = angular.module('buildings-module', ['ui.router', 'leaflet-directive']);

    buildingsModule.controller('BuildingsCtrl', ['$scope', '$state', '$stateParams', BuildingsCtrl]);
    buildingsModule.controller('FloorsCtrl', ['$scope', '$state', '$stateParams', FloorsCtrl]);

    buildingsModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('buildings', {
          url: '/buildings/:id',
          controller: 'BuildingsCtrl',
          templateUrl: 'html/buildings/buildings.html'
        })
        .state('floors', {
          url: '/buildings/:buildingId/floors/:floorId',
          controller: 'FloorsCtrl',
          templateUrl: 'html/buildings/floors.html'
        });
    }]);

    return buildingsModule;
  });

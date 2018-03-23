define(['./buildingsCtrl',
        './floorsCtrl'],
  function(BuildingsCtrl,
           FloorsCtrl) {
    'use strict';

    var buildingsModule = angular.module('buildings-module', ['ui.router', 'leaflet-directive']);

    buildingsModule.controller('BuildingsCtrl', ['$scope', '$state', '$stateParams', 'resourceService', BuildingsCtrl]);
    buildingsModule.controller('FloorsCtrl', ['$scope', '$state', '$stateParams', 'resourceService', FloorsCtrl]);

    buildingsModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('buildings', {
          url: '/buildings/:buildingId',
          controller: 'BuildingsCtrl',
          templateUrl: 'html/buildings/buildings.html'
        })
        .state('floors', {
          url: '/buildings/:buildingId/floors/:floorId',
          controller: 'FloorsCtrl',
          templateUrl: 'html/buildings/floors.html',
          resolve: {
            buildings: ['$stateParams', 'buildingUtil', function($stateParams, buildingUtil) {
              return buildingUtil.getBuildingsData();
            }],
            currentBuilding: ['$stateParams', 'buildings', 'buildingUtil', function($stateParams, buildings, buildingUtil) {
              var buildingId = parseInt($stateParams.buildingId);
              return buildingUtil.getBuildingById(buildingId, buildings.data.features);
            }],
            currentFloor: ['$stateParams', 'currentBuilding', 'buildingUtil', function($stateParams, currentBuilding, buildingUtil) {
              var floorId = parseInt($stateParams.floorId); 
              return buildingUtil.getFloorById(floorId, currentBuilding);
            }]
          }
        });
    }]);

    return buildingsModule;
  });

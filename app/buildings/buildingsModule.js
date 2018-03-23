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
            buildings: ['$stateParams', 'resourceService', function($stateParams, resourceService) {
              return resourceService.getBuildingsData();
            }],
            floorPictureUrl: ['$stateParams', 'buildings', 'resourceService', function($stateParams, buildings, resourceService) {
              var buildingId = parseInt($stateParams.buildingId);
              var floorId = parseInt($stateParams.floorId); 
              // this.$scope.buildings = response.data.features;
              var currentBuilding = buildings.data.features.reduce(function(acc, next) {
                if (next.id === buildingId) {
                  acc = next;
                } 
                return acc;
              }, {});

              var currentFloor = resourceService.getCurrentFloor(floorId, currentBuilding);

              // var currentFloor = currentBuilding.properties.floors.reduce((acc, next) => {
              //   if (next.id === floorId) {
              //     acc = next;
              //   }
              //   return acc;
              // }, {});

              return currentFloor.pictureURL;
            }]
          }
        });
    }]);

    return buildingsModule;
  });

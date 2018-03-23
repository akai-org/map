define([], function() {
  'use strict';

  var FloorsCtrl = (function() {

    function FloorsCtrl($scope, $state, $stateParams, resourceService) {
      this.$scope = $scope;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.resourceService = resourceService;

      this.$scope.floorPictureURL = this.$scope.$resolve.floorPictureUrl;

      // this.initializeFloor();
      this.initializeMap();
    }

    // FloorsCtrl.prototype.initializeFloor = function() {
    //   var successHandler = angular.bind(this, this.getBuildingsDataSuccessHandler);
    //   var errorHandler = angular.bind(this, this.getBuildingsDataErrorHandler);
    //   this.resourceService.getBuildingsData().then(successHandler, errorHandler);
    // }

    // FloorsCtrl.prototype.getBuildingsDataSuccessHandler = function(response) {
    //   var buildingId = parseInt(this.$stateParams.buildingId);
    //   var floorId = parseInt(this.$stateParams.floorId); 
    //   this.$scope.buildings = response.data.features;
    //   this.$scope.currentBuilding = this.getCurrentBuilding(buildingId, this.$scope.buildings);
    //   this.$scope.currentFloor = this.getCurrentFloor(floorId, this.$scope.currentBuilding);
    // }

    // FloorsCtrl.prototype.getBuildingsDataErrorHandler = function(error) {
    //   console.log(error);
    // }

    // FloorsCtrl.prototype.getCurrentBuilding = function(buildingId, buildings) {
    //   return buildings.reduce(function(acc, next) {
    //     if (next.id === buildingId) {
    //       acc = next;
    //     } 
    //     return acc;
    //   }, {});
    // }

    // FloorsCtrl.prototype.getCurrentFloor = function(floorId, building) {
    //   return building.properties.floors.reduce((acc, next) => {
    //     if (next.id === floorId) {
    //       acc = next;
    //     }
    //     return acc;
    //   }, {});
    // }

    FloorsCtrl.prototype.initializeMap = function () {
      this.$scope.center = {
        lat: 0,
        lng: 0,
        zoom: 1
      };
      this.$scope.layers = {
        baselayers: {
            andes: {
                name: 'Andes',
                type: 'imageOverlay',
                url: this.$scope.floorPictureURL,
                bounds: [[-540, -960], [540, 960]]
            }
        },
      }

      // this.$scope.markers = {
      //   osloMarker: {
      //       lat: 50,
      //       lng: 50,
      //       message: "I want to travel here!",
      //       focus: true,
      //       draggable: false
      //   }
      // }
    };

    return FloorsCtrl;
  })();

  return FloorsCtrl;
});

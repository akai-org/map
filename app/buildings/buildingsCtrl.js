define([], function() {
    'use strict';
  
    var BuildingsCtrl = (function() {
  
      function BuildingsCtrl($scope, $state, $stateParams, resourceService) {
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.resourceService = resourceService;
  
        this.getBuidlingsData();
      }
  
      BuildingsCtrl.prototype.getBuidlingsData = function () {
        var successHandler = angular.bind(this, this.getBuidlingsDataSuccessHandler);
        var errorHandler = angular.bind(this, this.getBuidlingsDataErrorHandler);
        this.resourceService.getBuildingsData().then(successHandler, errorHandler);
      };

      BuildingsCtrl.prototype.getBuidlingsDataSuccessHandler = function(response) {
        var buildingId = parseInt(this.$stateParams.buildingId);
        this.$scope.buildings = response.data.features;
        this.$scope.currentBuilding = this.getCurrentBuilding(buildingId, this.$scope.buildings);
        console.log(this.$scope.currentBuilding)
      };

      BuildingsCtrl.prototype.getBuidlingsDataErrorHandler = function(error) {
        console.log(error);
      };

      BuildingsCtrl.prototype.getCurrentBuilding = function(buildingId, buildings) {
        return buildings.reduce(function(acc, next) {
          if (next.id === buildingId) {
            acc = next;
          } 
          return acc;
        }, {});
      }
  
      return BuildingsCtrl;
    })();
  
    return BuildingsCtrl;
  });
  
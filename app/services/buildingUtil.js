define([], function() {
    'use strict';

    var BuildingUtil = (function() {

        function BuildingUtil(resourceService) {
            if (this instanceof BuildingUtil) {
                this.resourceService = resourceService;
            } else {
                return new BuildingUtil(resourceService);
            }
        }

        BuildingUtil.prototype.getBuildingsData = function() {
          return this.resourceService.getBuildingsData();
        };

        BuildingUtil.prototype.getBuildingById = function(buildingId, buildings) {
          return buildings.reduce(function(acc, next) {
            if (next.id === buildingId) {
                acc = next;
            } 
            return acc;
          }, {});
        }

        BuildingUtil.prototype.getFloorById = function(floorId, building) {
          return building.properties.floors.reduce((acc, next) => {
            if (next.id === floorId) {
              acc = next;
            }
            return acc;
          }, {});
        }


        return BuildingUtil;
    })();
return BuildingUtil;
});
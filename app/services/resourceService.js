define([], function() {
    'use strict';

    var ResourceService = (function() {

        function ResourceService($http) {
            if (this instanceof ResourceService) {
                this.$http = $http;
            } else {
                return new ResourceService($http);
            }
        }

        ResourceService.prototype.getBuildingsData = function() {
            var jsonFileUrl = 'resources/json/buildings-data.json';
            return this.$http.get(jsonFileUrl);
        };

        ResourceService.prototype.getCurrentFloor = function(floorId, building) {
            return building.properties.floors.reduce((acc, next) => {
                if (next.id === floorId) {
                  acc = next;
                }
                return acc;
              }, {});
        }


        return ResourceService;
    })();
return ResourceService;
});
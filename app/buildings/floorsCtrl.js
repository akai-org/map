define([], function() {
  'use strict';

  var FloorsCtrl = (function() {

    function FloorsCtrl($scope, $state, $stateParams, resourceService) {
      this.$scope = $scope;
      this.$state = $state;
      this.$stateParams = $stateParams;
      this.resourceService = resourceService;

      this.$scope.currentFloor = this.$scope.$resolve.currentFloor;

      this.initializeMap();
    }

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
                url: this.$scope.currentFloor.pictureURL,
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

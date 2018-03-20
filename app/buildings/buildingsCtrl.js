define([], function() {
  'use strict';

  var BuildingsCtrl = (function() {

    function BuildingsCtrl($scope, $state, $stateParams) {
      this.$scope = $scope;
      this.$state = $state;
      this.$stateParams = $stateParams;

      this.initializeMap();
    }

    BuildingsCtrl.prototype.initializeMap = function () {
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
                url: 'resources/svg/CW1.svg',
                bounds: [[-540, -960], [540, 960]],
                layerParams: {
                  noWrap: true,
                  attribution: 'Creative Commons image found <a href="http://www.flickr.com/photos/c32/8025422440/">here</a>'
                }
            }
        },
      }

      this.$scope.markers = {
        osloMarker: {
            lat: 50,
            lng: 50,
            message: "I want to travel here!",
            focus: true,
            draggable: false
        }
      }
    };

    return BuildingsCtrl;
  })();

  return BuildingsCtrl;
});

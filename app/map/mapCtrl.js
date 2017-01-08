define([], function() {
  'use strict';

  var MapCtrl = (function() {

    function MapCtrl($scope) {
      this.$scope = $scope;
      this.initializeMap();

      $scope.$on('leafletDirectiveMap.map.click', angular.bind(this, this.clickMapListener));
    }

    MapCtrl.prototype.initializeMap = function () {
      this.$scope.center = {
        lat: 52.40257,
        lng: 16.94933,
        zoom: 17
      };

      this.$scope.markers = [];

      this.$scope.events = {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      };
    };

    //example how add to map eventListener
    MapCtrl.prototype.clickMapListener = function(event, args) {
      this.$scope.markers.length = 0;
      var marker = {};
      marker.lat = args.leafletEvent.latlng.lat;
      marker.lng = args.leafletEvent.latlng.lng;
      this.$scope.markers.push(marker);
    };

    return MapCtrl;
  })();

  return MapCtrl;
});

define([], function() {
  'use strict';

  var MapCtrl = (function() {

    function MapCtrl($scope, $http, $stateParams, campuses) {
      this.$scope = $scope;
      this.$http = $http;
      this.$stateParams = $stateParams;
      this.campuses = campuses;
      console.log($stateParams);

      this.$scope.closeBuildingPanel = angular.bind(this, this.closeBuildingPanel);

      this.getBuildingsData();
      this.initializeMap();

      $scope.$on('leafletDirectiveMap.map.click', angular.bind(this, this.clickMapListener));
      $scope.$on('leafletDirectiveGeoJson.map.click', angular.bind(this, this.buildingClickListener));
    }

    MapCtrl.prototype.initializeMap = function () {
      var campusId = this.$stateParams.campus;
      var campus = this.campuses[campusId || 'piotrowo'];

      this.$scope.center = {
        lat: campus.coords[0],
        lng: campus.coords[1],
        zoom: campus.zoom
      };

      this.$scope.markers = [];

      this.$scope.events = {
        map: {
          enable: ['click'],
          logic: 'emit'
        }
      };
    };

    //example how add to normal map click eventListener and get geolocation data
    // MapCtrl.prototype.clickMapListener = function(event, args) {
    //   var marker = {};
    //   marker.lat = args.leafletEvent.latlng.lat;
    //   marker.lng = args.leafletEvent.latlng.lng;
    //   this.$scope.markers.push(marker);
    //   for (var i=0; i<this.$scope.markers.length; i++) {
    //     console.log('[' + this.$scope.markers[i].lng + ', ' + this.$scope.markers[i].lat + "],");
    //   }
    // };

    MapCtrl.prototype.clickMapListener = function(event, args) {
      this.$scope.geojson.data.features = this.$scope.geojson.data.features.map(function(b) {
        b.properties.show = false;
        return b;
      });
      delete this.$scope.selected;
    };

    MapCtrl.prototype.buildingClickListener = function(event, args) {
      this.buildingClick(args.leafletObject.feature, args.leafletEvent);
      this.showBuildingDetails(args.leafletObject.feature);
      this.centerMap(args.leafletEvent.latlng);
    };

    MapCtrl.prototype.buildingClick = function(feature, leafletEvent) {
      this.$scope.geojson.data.features = this.$scope.geojson.data.features.map(function(b) {
        if (b.id === feature.id) {
          b.properties.show = true;
        } else {
          b.properties.show = false;
        }
        return b;
      });
    };

    MapCtrl.prototype.getStyle = function(feature) {
      if (feature.properties.show) {
        return {
            fillColor: 'blue',
            weight: 2,
            opacity: 1,
            color: 'darkblue',
            fillOpacity: 0.6
        };
      } else {
        return {
            opacity: 0.2,
            fillOpacity: 0
        };
      }
    };

    MapCtrl.prototype.showBuildingDetails = function(feature) {
      this.$scope.selected = {
        building: feature
      };
    };

    MapCtrl.prototype.closeBuildingPanel = function() {
      delete this.$scope.selected;
    };

    MapCtrl.prototype.centerMap = function(position) {
      this.$scope.center.lat = position.lat;
      this.$scope.center.lng = position.lng;
    };

    MapCtrl.prototype.getBuildingsData = function() {
      var jsonFileUrl = 'resources/json/buildings-data.json';
      var successHandler = angular.bind(this, this.getBuildingsDataSuccessHandler);
      var errorHanlder = angular.bind(this, this.getBuildingsDataErrorHandler);
      this.$http.get(jsonFileUrl).then(successHandler, errorHanlder);
    };

    MapCtrl.prototype.getBuildingsDataSuccessHandler = function(response) {
      this.$scope.buildings = response.data;
      this.$scope.geojson = {
        data: this.$scope.buildings,
        style: angular.bind(this, this.getStyle)
      };
    };

    MapCtrl.prototype.getBuildingsDataErrorHandler = function(error) {
      console.log(error);
    };

    return MapCtrl;
  })();

  return MapCtrl;
});

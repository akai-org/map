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

      var polygon = {
        type: "GeometryCollection",
        geometries: [
            {
              type: "Polygon",
              name: "Biblioteka Techniczna",
              buildingId: 1,
              coordinates: [[
                [16.948342323303223, 52.4034170954373],
                [16.949329376220703, 52.40303744665669],
                [16.949731707572937, 52.40343345953541],
                [16.949704885482788, 52.403750921838146],
                [16.948953866958615, 52.4040323813507],
                [16.948342323303223, 52.4034170954373]
              ]]
          },
          {
            type: "Polygon",
            name: "Centrum Wykładowe",
            buildingId: 2,
            coordinates: [[
              [16.949517130851746, 52.40459856772159],
              [16.95037007331848, 52.404088018483634],
              [16.95015013217926, 52.40384583280469],
              [16.950101852416992, 52.40384910559299],
              [16.950091123580933, 52.40385237838104],
              [16.950048208236694, 52.40384910559299],
              [16.949973106384277, 52.403855651168854],
              [16.94991409778595, 52.403832741649005],
              [16.949855089187622, 52.403822923279726],
              [16.949806809425354, 52.40380001374288],
              [16.949763894081116, 52.40378037698754],
              [16.949710249900818, 52.40375419463349],
              [16.948964595794678, 52.40404219967339],
              [16.948975324630737, 52.40404547244711],
              [16.949517130851746, 52.40459856772159]
            ]]
        }
        ]
      };

      this.$scope.geojson = {
        data: polygon,
        style: {
          fillColor: "#79B7D4",
          weight: 2,
          opacity: 1,
          color: "#252F3C",
          fillOpacity: 0.6
        }
      };
    };

    //example how add to map eventListener
    MapCtrl.prototype.clickMapListener = function(event, args) {
      var marker = {};
      marker.lat = args.leafletEvent.latlng.lat;
      marker.lng = args.leafletEvent.latlng.lng;
      this.$scope.markers.push(marker);
      for (var i=0; i<this.$scope.markers.length; i++) {
        console.log('[' + this.$scope.markers[i].lng + ', ' + this.$scope.markers[i].lat + "],");
      }
    };

    return MapCtrl;
  })();

  return MapCtrl;
});

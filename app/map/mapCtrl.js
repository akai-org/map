define([], function() {
  'use strict';

  var MapCtrl = (function() {

    function MapCtrl($scope) {
      this.$scope = $scope;
      var mymap = L.map('mapid').setView([52.40257, 16.94933], 17);
      L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxZoom: 18
      }).addTo(mymap);
      var marker = L.marker([52.40407, 16.94968]).addTo(mymap);
      marker.bindPopup("<b>Centrum Wykładowe</b><br>Hello World. <a href='#'>Wejdź do środka</a>").openPopup();
    }

    // tutaj funkcje

    return MapCtrl;
  })();

  return MapCtrl;
});

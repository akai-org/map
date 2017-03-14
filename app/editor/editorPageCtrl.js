define([], function () {
  'use strict';

  var EditorPageCtrl = (function () {

    function EditorPageCtrl($scope) {
      this.$scope = $scope;
      var mymap = L.map('mapid', {
        center: [40.75, -74.2],
        zoom: 13
      });

      var imageUrl = 'img/CW0.svg',
        imageBounds = [[40.712216, -74.22655], [40.773941, -74.12544]];

      L.imageOverlay(imageUrl, imageBounds).addTo(mymap);

      // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      //   attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
      //   maxZoom: 18
      // }).addTo(mymap);
      // var marker = L.marker([52.40407, 16.94968]).addTo(mymap);
      // marker.bindPopup("<b>Centrum Wykładowe</b><br>Hello World. <a href='#'>Wejdź do środka</a>").openPopup();
    }

    return EditorPageCtrl;
  })();

  return EditorPageCtrl;
});

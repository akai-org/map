define([], function() {
  'use strict';

  var BuildingsCtrl = (function() {

    function BuildingsCtrl($scope) {
      this.$scope = $scope;

      this.initializeMap();
    }

    BuildingsCtrl.prototype.initializeMap = function () {
      this.$scope.center = {
        lat: 52.40257,
        lng: 16.94933,
        zoom: 17
      };
    };

    return BuildingsCtrl;
  })();

  return BuildingsCtrl;
});

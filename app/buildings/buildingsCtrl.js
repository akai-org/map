define([], function() {
  'use strict';

  var BuildingsCtrl = (function() {

    function BuildingsCtrl($scope, $state, $stateParams) {
      this.$scope = $scope;
      this.$state = $state;
      this.$stateParams = $stateParams;

      this.$scope.test = "building id: " + this.$stateParams.id;

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

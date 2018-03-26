define([], function () {
  'use strict';

  var EditorPageCtrl = (function () {

    function EditorPageCtrl($scope, buildingUtil) {
      this.$scope = $scope;
      this.buildingUtil = buildingUtil;
      this.getBuildingsData();
    }

    EditorPageCtrl.prototype.getBuildingsData = function() {
      var successHandler = angular.bind(this, this.getBuildingsDataSuccessHandler);
      var errorHandler = angular.bind(this, this.getBuildingsDataErrorHandler);
      this.buildingUtil.getBuildingsData().then(successHandler, errorHandler);
    };

    EditorPageCtrl.prototype.getBuildingsDataSuccessHandler = function(response) {
      this.$scope.buildingsData = response.data.features;
      console.log(this.$scope.buildingsData);
    };

    EditorPageCtrl.prototype.getBuildingsDataErrorHandler = function(error) {
      console.log(error);
    };

    return EditorPageCtrl;
  })();

  return EditorPageCtrl;
});

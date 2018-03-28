define([], function () {
  'use strict';

  var EditorBuildingsDataCtrl = (function () {

    function EditorBuildingsDataCtrl($scope, buildingUtil) {
      this.$scope = $scope;
      this.buildingUtil = buildingUtil;
      this.getBuildingsData();

      this.$scope.addFloor = angular.bind(this, this.addFloor);
      this.$scope.saveJsonFile = angular.bind(this, this.saveJsonFile);
    }

    EditorBuildingsDataCtrl.prototype.getBuildingsData = function() {
      var successHandler = angular.bind(this, this.getBuildingsDataSuccessHandler);
      var errorHandler = angular.bind(this, this.getBuildingsDataErrorHandler);
      this.buildingUtil.getBuildingsData().then(successHandler, errorHandler);
    };

    EditorBuildingsDataCtrl.prototype.getBuildingsDataSuccessHandler = function(response) {
      this.$scope.buildingsData = response.data.features;
      console.log(this.$scope.buildingsData);
    };

    EditorBuildingsDataCtrl.prototype.getBuildingsDataErrorHandler = function(error) {
      console.log(error);
    };

    EditorBuildingsDataCtrl.prototype.addFloor = function(buildingProperties) {
      var floors = buildingProperties.floors ? buildingProperties.floors : [];
      var floor = {};
      if (floors && floors.length > 0) {
        var maxId = floors.map(function(f) {
          return f.id;
        }).reduce(function(acc, next) {
          if (next > acc) {
            acc = next;
          }
          return acc;
        }, 0);
        
        floor = {
          id: ++maxId,
          name: '',
          pictureURL: ''
        };
      } else {
        floor = {
          id: 1,
          name: '',
          pictureURL: ''
        };
      }
      floors.push(floor);
      buildingProperties.floors = floors;
    };

    EditorBuildingsDataCtrl.prototype.saveJsonFile = function() {
      var successHandler = angular.bind(this, this.saveJsonFileSuccessHandler);
      var errorHandler = angular.bind(this, this.saveJsonFileErrorHandler);
      this.buildingUtil.getBuildingsData().then(successHandler, errorHandler);
    };

    EditorBuildingsDataCtrl.prototype.saveJsonFileSuccessHandler = function(response) {
      var buildingsDataJson = response.data;
      buildingsDataJson.features = this.$scope.buildingsData;
      var a = document.createElement('a');
      a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(JSON.stringify(buildingsDataJson)));
      a.setAttribute('download', 'buildings-data.json');
      a.click();
    };

    EditorBuildingsDataCtrl.prototype.saveJsonFileErrorHandler = function(error) {
      console.log(error);
    };

    return EditorBuildingsDataCtrl;
  })();

  return EditorBuildingsDataCtrl;
});

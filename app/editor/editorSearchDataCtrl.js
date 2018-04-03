define([], function () {
  'use strict';

  var EditorSearchDataCtrl = (function () {

    function EditorSearchDataCtrl($scope, searchDataUtil, campuses) {
      this.$scope = $scope;
      this.searchDataUtil = searchDataUtil;
      this.$scope.campuses = campuses;

      this.$scope.addRoom = angular.bind(this, this.addRoom);
      this.$scope.saveJsonFile = angular.bind(this, this.saveJsonFile);
      this.$scope.addBuilding = angular.bind(this, this.addBuilding);

      this.getBaseSearchData();
    }

    EditorSearchDataCtrl.prototype.getBaseSearchData = function() {
      var successHandler = angular.bind(this, this.getBaseSearchDataSuccessHandler);
      var errorHandler = angular.bind(this, this.getBaseSearchDataErrorHandler);
      this.searchDataUtil.getBaseSearchData().then(successHandler, errorHandler);
    };
    
    EditorSearchDataCtrl.prototype.getBaseSearchDataSuccessHandler = function(response) {
      this.$scope.searchData = response.data;
      this.$scope.buildings = this.searchDataUtil.convertBaseSearchDataToFormData(this.$scope.searchData);
    };

    EditorSearchDataCtrl.prototype.getBaseSearchDataErrorHandler = function(error) {
      console.log(error);
    };

    EditorSearchDataCtrl.prototype.addRoom = function(building) {
      var maxRoomId = this.getMaxRoomId();
      var room = {
        roomId: ++maxRoomId,
        campus: building.campus,
        buildingId: building.buildingId,
        name: '',
        aliasesString: '',
        aliases: []
      };
      building.rooms.push(room);
    };

    EditorSearchDataCtrl.prototype.getMaxBuildingId = function() {
      var buildingIds = this.$scope.buildings.map(function(b) {
        return b.buildingId;
      });
      return Math.max.apply(null, buildingIds);
    };

    EditorSearchDataCtrl.prototype.getMaxRoomId = function() {
      var rooms = [];
      for (var i=0; i<this.$scope.buildings.length; i++) {
        rooms = rooms.concat(this.$scope.buildings[i].rooms);
      };
      var roomIds = rooms.map(function(b) {
        return b.roomId;
      });
      return Math.max.apply(null, roomIds);
    };

    EditorSearchDataCtrl.prototype.saveJsonFile = function() {
      var data = this.searchDataUtil.convertFormDataToBaseSearchData(this.$scope.buildings);
      var a = document.createElement('a');
      a.setAttribute('href', 'data:text/plain;charset=utf-u,'+encodeURIComponent(JSON.stringify(data)));
      a.setAttribute('download', 'base-search-data.json');
      a.click();
    };

    EditorSearchDataCtrl.prototype.addBuilding = function(buildings) {
      var maxBuildingId = this.getMaxBuildingId();
      var newBuilding = {
        buildingId: ++maxBuildingId,
        name: "",
        aliases: [],
        aliasesString: "",
        campus: this.$scope.campuses["piotrowo"],
        rooms: []
      };
      buildings.push(newBuilding);
    }

    return EditorSearchDataCtrl;
  })();

  return EditorSearchDataCtrl;
});

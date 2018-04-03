define([], function() {
  'use strict';

  var SearchDataUtil = (function() {

    function SearchDataUtil(resourceService, campuses) {
      if (this instanceof SearchDataUtil) {
        this.resourceService = resourceService;
        this.campuses = campuses;
      } else {
        return new SearchDataUtil(resourceService, campuses);
      }
    }

    SearchDataUtil.prototype.getBaseSearchData = function() {
      return this.resourceService.getBaseSearchData();
    };

    SearchDataUtil.prototype.convertBaseSearchDataToFormData = function(baseSearchData) {
      var data = this.convertAliasesToString(baseSearchData);
      data = this.convertCampusesToEnum(data);
      var buildings = data.filter(function(d) {
        return d.roomId == null || d.roomId == undefined;
      });
      this.prepareRooms(buildings, data);
      console.log(buildings);
      return buildings;
    };

    SearchDataUtil.prototype.convertFormDataToBaseSearchData = function(formData) {
      var data = [];
      for (var i=0; i<formData.length; i++) {
        var building = {
          name: formData[i].name,
          buildingId: formData[i].buildingId,
          campus: formData[i].campus.shortName,
          aliases: this.convertAliasesStringToAliases(formData[i].aliasesString)
        }
        data.push(building);
        for (var j=0; j<formData[i].rooms.length; j++) {
          var room = formData[i].rooms[j];
          var _room = {
            name: room.name,
            buildingId: room.buildingId,
            campus: room.campus.shortName,
            roomId: room.roomId,
            aliases: this.convertAliasesStringToAliases(room.aliasesString)
          };
          data.push(_room);
        }
      }
      return data;
    };

    SearchDataUtil.prototype.convertAliasesStringToAliases = function(aliasesString) {
      return aliasesString.split(",").map(function(s) {
        var x = new String(s);
        return x.trim();
      });
    };

    SearchDataUtil.prototype.prepareRooms = function(buildings, baseSearchData) {
      for (var i=0; i<buildings.length; i++) {
        var building = buildings[i];
        building.rooms = [];
        var rooms = baseSearchData.filter(function(r) {
          return r.roomId && r.buildingId === building.buildingId;
        });
        building.rooms = rooms;
      }
    };

    SearchDataUtil.prototype.convertAliasesToString = function(baseSearchData) {
      return baseSearchData.map(function(b) {
        b.aliasesString = b.aliases.join(', ');
        return b;
      });
    };

    SearchDataUtil.prototype.convertCampusesToEnum = function(buildings) {
      return buildings.map(angular.bind(this, function(b) {
        b.campus = this.campuses[b.campus];
        return b;
      }));
    };

    return SearchDataUtil;
  })();
return SearchDataUtil;
});
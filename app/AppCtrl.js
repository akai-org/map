define([], function() {
  'use strict';

  var AppCtrl = (function() {

    function AppCtrl($scope, campuses, $rootScope, searchService) {
      this.$scope = $scope;
      this.$rootScope = $rootScope;
      this.$scope.campuses = campuses;
      this.searchService = searchService;

      this.$scope.query = '';

      this.$scope.search = angular.bind(this, this.search);
      this.$scope.sidenavToggle = angular.bind(this, this.sidenavToggle);
      this.$scope.showResultOnMap = angular.bind(this, this.showResultOnMap);

      this.$scope.$watch('query', angular.bind(this, this.watchSearchQuery));
    }

    AppCtrl.prototype.sidenavToggle = function () {
      angular.element('.side-nav').toggleClass('active');
    };

    AppCtrl.prototype.search = function(query) {
      var successHandler = angular.bind(this, this.searchSuccessHandler);
      var errorHandler = angular.bind(this, this.searchErrorHandler);
      this.searchService.search(query).then(successHandler, errorHandler);
    };

    AppCtrl.prototype.searchSuccessHandler = function(response) {
      this.$scope.search.results = response.hits;
      angular.element('.autocomplete--results').perfectScrollbar({
        suppressScrollX: true
      });
    };

    AppCtrl.prototype.searchErrorHandler = function(error) {
      console.log(error);
    };

    AppCtrl.prototype.watchSearchQuery = function(newValue, oldValue) {
      if (newValue) {
        this.search(newValue);
      } else {
        delete this.$scope.search.results;
        return;
      }
    };

    AppCtrl.prototype.showResultOnMap = function(result) {
      var params = {
        campus: result.campus,
        buildingId: result.buildingId,
        roomId: result.roomId
      };
      this.$rootScope.$broadcast('selectBuilding', params);
      delete this.$scope.search.results;
    };

    return AppCtrl;
  })();

  return AppCtrl;
});

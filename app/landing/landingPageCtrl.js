define([], function() {
  'use strict';

  var LandingPageCtrl = (function() {

    function LandingPageCtrl($scope, $state, $rootScope, searchService) {
      this.$scope = $scope;
      this.$state = $state;
      this.$rootScope = $rootScope;
      this.searchService = searchService;

      this.$scope.btnMap = "Przejdź do mapy";
      this.$scope.btnBuildings = "Przejdź do spisu budynkow";
      this.$scope.query = '';

      this.$scope.search = angular.bind(this, this.search);
      this.$scope.showResultOnMap = angular.bind(this, this.showResultOnMap);

      this.$scope.$watch('query', angular.bind(this, this.watchSearchQuery));
    }

    LandingPageCtrl.prototype.search = function(query) {
      var successHandler = angular.bind(this, this.searchSuccessHandler);
      var errorHandler = angular.bind(this, this.searchErrorHandler);
      this.searchService.search(query).then(successHandler, errorHandler);
    };

    LandingPageCtrl.prototype.searchSuccessHandler = function(response) {
      this.$scope.search.results = response.hits;
      angular.element('.autocomplete--results').perfectScrollbar({
        suppressScrollX: true
      });
    };

    LandingPageCtrl.prototype.searchErrorHandler = function(error) {
      console.log(error);
    };

    LandingPageCtrl.prototype.watchSearchQuery = function(newValue, oldValue) {
      if (newValue) {
        this.search(newValue);
      } else {
        delete this.$scope.search.results;
        return;
      }
    };

    LandingPageCtrl.prototype.showResultOnMap = function(result) {
      var params = {
        campus: result.campus,
        buildingId: result.buildingId,
        roomId: result.roomId
        // building: result
      };
      this.$state.go('map', params);
    };

    return LandingPageCtrl;
  })();

  return LandingPageCtrl;
});

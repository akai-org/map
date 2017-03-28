define([], function() {
  'use strict';

  var LandingPageCtrl = (function() {

    function LandingPageCtrl($scope, $state, $rootScope, algolia) {
      this.$scope = $scope;
      this.$state = $state;
      this.$rootScope = $rootScope;
      this.algolia = algolia;
      this.$scope.btnMap = "Przejdź do mapy";
      this.$scope.btnBuildings = "Przejdź do spisu budynkow";
      this.$scope.query = '';

      this.buildings = this.algolia.Client('89DSILI2XZ', '50296fbfabeed6e3403020f384654289');
      this.index = this.buildings.initIndex('Polimapa');

      this.$scope.search = angular.bind(this, this.search);
      this.$scope.showResultOnMap = angular.bind(this, this.showResultOnMap);

      this.$scope.$watch('query', angular.bind(this, this.watchSearchQuery));
    }

    LandingPageCtrl.prototype.initialize = function() {

    };

    LandingPageCtrl.prototype.search = function(query) {
      var successHandler = angular.bind(this, this.searchSuccessHandler);
      var errorHandler = angular.bind(this, this.searchErrorHandler);
      this.index.search(query).then(successHandler, errorHandler);
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
      // if (newValue) {
      //   this.search(newValue);
      // } else {
      //   delete this.$scope.search.hits;
      //   return;
      // }
    }

    LandingPageCtrl.prototype.showResultOnMap = function(result) {
      var params = {
        campus: result.properties.campus,
        buildingsId: result.id
      }
      // this.$state.go('map', {campus: result.properties.campus, buildingsId: result.id});
      this.$state.go('map', params);
    }

    return LandingPageCtrl;
  })();

  return LandingPageCtrl;
});

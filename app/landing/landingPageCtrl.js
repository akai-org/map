define([], function() {
  'use strict';

  var LandingPageCtrl = (function() {

    function LandingPageCtrl($scope, $state, algolia) {
      this.$scope = $scope;
      this.$state = $state;
      this.algolia = algolia;
      this.$scope.btnMap = "Przejdź do mapy";
      this.$scope.btnBuildings = "Przejdź do spisu budynkow";
      this.$scope.query = '';

      this.buildings = this.algolia.Client('89DSILI2XZ', '50296fbfabeed6e3403020f384654289');
      this.index = this.buildings.initIndex('Polimapa');

      this.$scope.search = angular.bind(this, this.search);
      this.$scope.selectOption = angular.bind(this, this.selectOption);

      var a = angular.element('#search');
      console.log(a);
      angular.element('#search').perfectScrollbar({
        suppressScrollX: true
      });

      this.$scope.$watch('query', angular.bind(this, this.watchQuery));
    }

    LandingPageCtrl.prototype.initialize = function() {

    };

    LandingPageCtrl.prototype.search = function(query) {
      var successHandler = angular.bind(this, this.searchSuccessHandler);
      var errorHandler = angular.bind(this, this.searchErrorHandler);
      this.index.search(query).then(successHandler, errorHandler);
    };

    LandingPageCtrl.prototype.searchSuccessHandler = function(response) {
      console.log(response);
      this.$scope.search.hits = response.hits;
      angular.element('#search').perfectScrollbar({
        suppressScrollX: true
      });
      // angular.element('#search').perfectScrollbar('update');
    };

    LandingPageCtrl.prototype.searchErrorHandler = function(error) {
      console.log(error);
    };

    LandingPageCtrl.prototype.watchQuery = function(newValue, oldValue) {
      if (newValue) {
        this.search(newValue);
      } else {
        delete this.$scope.search.hits;
        return;
      }
    }

    LandingPageCtrl.prototype.selectOption = function(hit) {
      var params = {
        campus: hit.properties.campus,
        buildingsId: hit.id
      }
      this.$state.go('map', {campus: hit.properties.campus, buildingsId: hit.id});
    }

    return LandingPageCtrl;
  })();

  return LandingPageCtrl;
});

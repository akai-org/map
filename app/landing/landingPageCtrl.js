define([], function() {
  'use strict';

  var LandingPageCtrl = (function() {

    function LandingPageCtrl($scope) {
      this.$scope = $scope;
      this.$scope.btnMap = "Przejdź do mapy";
      this.$scope.btnBuildings = "Przejdź do spisu budynkow";
    }

    // tutaj funkcje

    return LandingPageCtrl;
  })();

  return LandingPageCtrl;
});

define([], function() {
  'use strict';

  var AppCtrl = (function() {

    function AppCtrl($scope, campuses, $rootScope) {
      this.$scope = $scope;
      this.$rootScope = $rootScope;
      this.$scope.campuses = campuses;

      $scope.sidenavToggle = angular.bind(this, this.sidenavToggle);
    }

    AppCtrl.prototype.sidenavToggle = function () {
      angular.element('.side-nav').toggleClass('active');
    };


    return AppCtrl;
  })();

  return AppCtrl;
});

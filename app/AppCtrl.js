define([], function() {
  'use strict';

  var AppCtrl = (function() {

    function AppCtrl($scope, campuses) {
      this.$scope = $scope;

      this.$scope.campuses = campuses;

      this.$scope.sideNavClosed = false;
      this.$scope.closeSideNav = angular.bind(this, this.closeSideNav);

    }

    AppCtrl.prototype.closeSideNav = function() {
      this.$scope.sideNavClosed = true;
    };



    // tutaj funkcje

    return AppCtrl;
  })();

  return AppCtrl;
});

define([], function() {
  'use strict';

  var AppCtrl = (function() {

    function AppCtrl($scope, campuses) {
      this.$scope = $scope;

      this.$scope.campuses = campuses;

      this.$scope.sideNavClosed = false;
      this.$scope.closeSideNav = angular.bind(this, this.closeSideNav);

      $scope.sidenavToggle = angular.bind(this, this.sidenavToggle);
    }

    AppCtrl.prototype.sidenavToggle = function () {
      angular.element('.side-nav').toggleClass('active');
    };


    return AppCtrl;
  })();

  return AppCtrl;
});

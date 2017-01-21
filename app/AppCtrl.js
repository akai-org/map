define([], function() {
  'use strict';

  var AppCtrl = (function() {

    function AppCtrl($scope) {
      this.$scope = $scope;
      $scope.sidenavToggle = angular.bind(this, this.sidenavToggle);
    }

    AppCtrl.prototype.sidenavToggle = function () {
      // var elem = $($event.currentTarget) || $($event.srcElement);
      // elem.parent().toggleClass('active');
      angular.element('.side-nav').toggleClass('active');
    };


    return AppCtrl;
  })();

  return AppCtrl;
});

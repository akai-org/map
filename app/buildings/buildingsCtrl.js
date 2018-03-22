define([], function() {
    'use strict';
  
    var BuildingsCtrl = (function() {
  
      function BuildingsCtrl($scope, $state, $stateParams, resourceService) {
        this.$scope = $scope;
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.resourceService = resourceService;
  
        this.initializeView();
      }
  
      BuildingsCtrl.prototype.initializeView = function () {
        console.log(this.$stateParams);
      };
  
      return BuildingsCtrl;
    })();
  
    return BuildingsCtrl;
  });
  
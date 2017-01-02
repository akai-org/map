define(['./buildingsCtrl'],
  function(BuildingsCtrl) {
    'use strict';

    var buildingsModule = angular.module('buildings-module', ['ui.router']);

    buildingsModule.controller('BuildingsCtrl', ['$scope', BuildingsCtrl]);

    buildingsModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('buildings', {
          url: '/buildings',
          controller: 'BuildingsCtrl',
          templateUrl: 'buildings/buildings.html'
        });
    }]);

    return buildingsModule;
  });

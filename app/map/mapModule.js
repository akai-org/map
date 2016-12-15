define(['./mapCtrl'],
        function(MapCtrl) {
    'use strict';

     var mapModule = angular.module('map-module', ['ui.router']);

     mapModule.controller('MapCtrl', ['$scope', MapCtrl]);

     mapModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
       $stateProvider
          .state('map', {
            url: '/map',
            controller: 'MapCtrl',
            templateUrl: 'map/map.html'
          });
     }]);

     return mapModule;
});

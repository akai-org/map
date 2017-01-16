define(['./mapCtrl'],
        function(MapCtrl) {
    'use strict';

     var mapModule = angular.module('map-module', ['ui.router',
                                                   'leaflet-directive']);

     mapModule.controller('MapCtrl', ['$scope', MapCtrl]);

     mapModule.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
       $stateProvider
          .state('map', {
            url: '/map',
            controller: 'MapCtrl',
            templateUrl: 'html/map/map.html'
          });
     }]);

     return mapModule;
});

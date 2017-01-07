require([
    './AppCtrl',
    './landing/landingModule',
    './map/mapModule',
    './buildings/buildingsModule'],
  function (AppCtrl,
            landingModule,
            mapModule,
            buildingsModule) {
    'use strict';

    var interactiveMapApp = angular.module('interactive-map-app', [
      'landing-module',
      'map-module',
      'buildings-module',
      'ui.router']);


    interactiveMapApp.run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.title = 'Interaktywna mapa Politechniki Poznańskiej';
    }]);

    interactiveMapApp.controller('AppCtrl', ['$scope', AppCtrl]);

    angular.bootstrap(document, ['interactive-map-app']);

    return interactiveMapApp;
  });

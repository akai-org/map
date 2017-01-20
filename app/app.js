require([
    './AppCtrl',
    './landing/landingModule',
    './map/mapModule',
    './buildings/buildingsModule',
    './editor/editorModule'],
  function (AppCtrl,
            landingModule,
            mapModule,
            buildingsModule,
            editorModule) {
    'use strict';

    var interactiveMapApp = angular.module('interactive-map-app', [
      'landing-module',
      'map-module',
      'buildings-module',
      'editor-module',
      'ui.router']);

    interactiveMapApp.run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.title = 'Interaktywna mapa Politechniki Poznańskiej';
    }]);

    interactiveMapApp.controller('AppCtrl', ['$scope', AppCtrl]);

    angular.bootstrap(document, ['interactive-map-app']);

    return interactiveMapApp;
  });

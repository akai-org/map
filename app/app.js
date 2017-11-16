require([
    './AppCtrl',
    './landing/landingModule',
    './map/mapModule',
    './buildings/buildingsModule',
    './editor/editorModule',
    './services/services'],
  function (AppCtrl,
            landingModule,
            mapModule,
            buildingsModule,
            editorModule,
            globalServiceModule) {
    'use strict';

    var interactiveMapApp = angular.module('interactive-map-app', [
      'landing-module',
      'map-module',
      'buildings-module',
      'editor-module',
      'ui.router',
      'global-services-module']);

    interactiveMapApp.run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.title = 'Interaktywna mapa Politechniki Poznańskiej';

      $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
          $rootScope.landingView = toParams.landingPageView ? true : false;         
      });
    }]);

    interactiveMapApp.constant('campuses', {
      'piotrowo': {
        name: 'Kampus Piotrowo',
        coords: [52.4022733, 16.9496852],
        zoom: 17
      },
      'nieszawska': {
        name: 'Kampus Nieszawska',
        coords: [52.4163383, 16.9804755],
        zoom: 17
      },
      'strzelecka': {
        name: 'Kampus Strzelecka',
        coords: [52.4047467, 16.9330464],
        zoom: 20
      },
      'wilda': {
        name: 'Rektorat',
        coords: [52.4047467, 16.9330464],
        zoom: 20
      }
    });

    interactiveMapApp.controller('AppCtrl', ['$scope', 'campuses', '$rootScope', 'searchService', AppCtrl]);

    angular.bootstrap(document, ['interactive-map-app']);

    return interactiveMapApp;
  });

require(['./landing/landingModule',
    './map/mapModule',
    './buildings/buildingsModule'],
  function (landingModule,
            mapModule) {
    'use strict';

    var interactiveMapApp = angular.module('interactive-map-app', ['landing-module',
      'map-module',
      'buildings-module',
      'ui.router']);

    // interactiveMapApp.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    //   $stateProvider
    //       .state({
    //
    //       })
    // }]);

    interactiveMapApp.run(['$rootScope', '$state', function ($rootScope, $state) {
      $rootScope.title = 'Interaktywna mapa Politechniki Poznańskiej';
    }]);

    angular.bootstrap(document, ['interactive-map-app']);

    return interactiveMapApp;
  });

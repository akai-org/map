define(['./editorBuildingsDataCtrl',
        './editorSearchDataCtrl'],
  function (EditorBuildingsDataCtrl,
            EditorSearchDataCtrl) {
    'use strict';

    var editorModule = angular.module('editor-module', ['ui.router']);

    editorModule.controller('EditorBuildingsDataCtrl', ['$scope', 'buildingUtil', EditorBuildingsDataCtrl]);
    editorModule.controller('EditorSearchDataCtrl', ['$scope', 'buildingUtil', EditorSearchDataCtrl]);

    editorModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('editorBuildingsData', {
          url: '/editor-buildings-data',
          controller: 'EditorBuildingsDataCtrl',
          templateUrl: 'html/editor/editorBuildingsData.html'
        })
        .state('editorSearchData', {
          url: '/editor-search-data',
          controller: 'EditorSearchDataCtrl',
          templateUrl: 'html/editor/editorSearchData.html'
        });
    }]);

    return editorModule;
  });

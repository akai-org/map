define(['./editorPageCtrl'],
  function (EditorPageCtrl) {
    'use strict';

    var editorModule = angular.module('editor-module', ['ui.router']);

    editorModule.controller('EditorPageCtrl', ['$scope', 'buildingUtil', EditorPageCtrl]);

    editorModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('editor', {
          url: '/editor',
          controller: 'EditorPageCtrl',
          templateUrl: 'html/editor/editor.html'
        });
    }]);

    return editorModule;
  });

define(['./EditorPageCtrl'],
  function (EditorPageCtrl) {
    'use strict';

    var editorModule = angular.module('editor-module', ['ui.router']);

    editorModule.controller('EditorPageCtrl', ['$scope', EditorPageCtrl]);
    editorModule.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('editor', {
          url: '/editor',
          controller: 'EditorPageCtrl',
          templateUrl: 'editor/editor.html'
        });
    }]);

    return editorModule;
  });
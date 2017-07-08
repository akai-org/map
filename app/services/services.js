define(['./searchService'],
  function(SearchService) {
    'use strict';

    var globalServiceModule = angular.module('global-services-module', ['algoliasearch']);

    globalServiceModule.factory('searchService', ['algolia', SearchService]);

    return globalServiceModule;
});

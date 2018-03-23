define(['./searchService',
        './resourceService',
        './buildingUtil'],
  function(SearchService,
           ResourceService,
           BuildingUtil) {
    'use strict';

    var globalServiceModule = angular.module('global-services-module', ['algoliasearch']);

    globalServiceModule.factory('searchService', ['algolia', SearchService]);
    globalServiceModule.factory('resourceService', ['$http', ResourceService]);
    globalServiceModule.factory('buildingUtil', ['resourceService', BuildingUtil]);

    return globalServiceModule;
});

define(['./searchService',
        './resourceService',
        './buildingUtil',
        './searchDataUtil'],
  function(SearchService,
           ResourceService,
           BuildingUtil,
           SearchDataUtil) {
    'use strict';

    var globalServiceModule = angular.module('global-services-module', ['algoliasearch']);

    globalServiceModule.factory('searchService', ['algolia', SearchService]);
    globalServiceModule.factory('resourceService', ['$http', ResourceService]);
    globalServiceModule.factory('buildingUtil', ['resourceService', BuildingUtil]);
    globalServiceModule.factory('searchDataUtil', ['resourceService', SearchDataUtil]);

    return globalServiceModule;
});

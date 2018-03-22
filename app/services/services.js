define(['./searchService',
        './resourceService'],
  function(SearchService,
           ResourceService) {
    'use strict';

    var globalServiceModule = angular.module('global-services-module', ['algoliasearch']);

    globalServiceModule.factory('searchService', ['algolia', SearchService]);
    globalServiceModule.factory('resourceService', ['$http', ResourceService]);

    return globalServiceModule;
});

define([], function() {
  'use strict';

  var SearchService = (function() {

    function SearchService(algolia) {
      if (this instanceof SearchService) {
        this.algolia = algolia;
        this.buildings = this.algolia.Client('89DSILI2XZ', '50296fbfabeed6e3403020f384654289');
        this.index = this.buildings.initIndex('Polimapa');
      } else {
        return new SearchService(algolia);
      }
    }

    SearchService.prototype.search = function(query) {
      return this.index.search(query);
    };


    return SearchService;
  })();
  return SearchService;
});

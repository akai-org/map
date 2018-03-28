define([], function() {
  'use strict';

  var SearchDataUtil = (function() {

    function SearchDataUtil(resourceService) {
      if (this instanceof SearchDataUtil) {
        this.resourceService = resourceService;
      } else {
        return new SearchDataUtil(resourceService);
      }
    }

    SearchDataUtil.prototype.getBaseSearchData = function() {
      return this.resourceService.getBaseSearchData();
    };

    SearchDataUtil.prototype.convertBaseSearchDataToFormData = function(baseSearchData) {

    };

    SearchDataUtil.prototype.convertFormDataToBaseSearchData = function(formData) {
      
    };

    return SearchDataUtil;
  })();
return SearchDataUtil;
});
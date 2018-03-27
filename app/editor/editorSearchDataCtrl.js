define([], function () {
    'use strict';
  
    var EditorSearchDataCtrl = (function () {
  
      function EditorSearchDataCtrl($scope, searchDataUtil) {
        this.$scope = $scope;
				this.searchDataUtil = searchDataUtil;
				this.getBaseSearchData();
      }

      EditorSearchDataCtrl.prototype.getBaseSearchData = function() {
				var successHandler = angular.bind(this, this.getBaseSearchDataSuccessHandler);
				var errorHandler = angular.bind(this, this.getBaseSearchDataErrorHandler);
				this.searchDataUtil.getBaseSearchData().then(successHandler, errorHandler);
			};
			
			EditorSearchDataCtrl.prototype.getBaseSearchDataSuccessHandler = function(response) {
				this.$scope.searchData = response.data;
				console.log(response);
			};

			EditorSearchDataCtrl.prototype.getBaseSearchDataErrorHandler = function(error) {
				console.log(error);
			};
  
  
      return EditorSearchDataCtrl;
    })();
  
    return EditorSearchDataCtrl;
  });
  
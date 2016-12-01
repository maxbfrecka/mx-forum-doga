angular.module('threadPreview',[])

.directive('mxThreadPreview', ['threadData', 'imageBotData', function(threadData, imageBotData){
	return {
		restrict: 'E',
	  templateUrl: 'catalog/threadPreview/thread-preview.html',
	  scope: true,
	  transclude: true,
	  link: function(scope, element, attrs){
	  	scope.threads = threadData.threads;
	  	scope.generateImage = imageBotData.generateImage

	  	//gets imageID from init variable to pass around
	  	imageBotData.imageID = scope.image;



		}
  }
}])



/*
-each thread/reply has a datesort on it
-sort thread previews by datesort


*/

.factory('replyCounter', function(){
	var replyCounter = {}

	replyCounter.getDateSort = function(obj){


	}





	return replyCounter




})
angular.module('createArtist',['ngFileUpload'])
.directive('mxCreateArtist', ['ngAudio', 'nowPlayingList', 'browseTestData', 'libraryData', '$http', 'Upload', function(ngAudio, nowPlayingList, browseTestData, libraryData, $http, Upload){
	return {
		restrict: 'E',
	  templateUrl: 'createArtist/createArtist.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "cac",
	  
	  link: function(scope, element, attrs){


	  	//should re-route to new artist page
	  	scope.submit = function() {
	  		console.log(scope.artistImageFile)
	      if (scope.form.artistImage.$valid && scope.artistImageFile) {
	        scope.upload(scope.artistImageFile)
	      }
   	 	}
	  	

	  	scope.username = 'TEST USERNAME'

	  	scope.upload = function (file) {
        Upload.upload({
            url: '/../api/createArtist',
            data: {file: file, userName: scope.username, artistName: scope.artistName, artistGenre: scope.genre},
            file: file
        }).then(function (res) {
            console.log('Success ' + res.config.data.file.name + 'uploaded. Response: ' + res.data);
        }, function (res) {
            console.log('Error status: ' + res.status);
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
        })
    


    };








	  },

	  controller: function(){
	  }
	}
}])
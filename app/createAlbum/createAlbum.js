angular.module('createAlbum',['ngFileUpload'])
.directive('mxCreateAlbum', ['ngAudio', 'nowPlayingList', 'browseTestData', 'libraryData', '$http', 'Upload', function(ngAudio, nowPlayingList, browseTestData, libraryData, $http, Upload){
	return {
		restrict: 'E',
	  templateUrl: 'createAlbum/createAlbum.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "calbc",
	  
	  link: function(scope, element, attrs){
	  	


		  scope.submitAlbum = function() {
	  		console.log(scope.albumImageFile)
	      if (scope.form.albumImage.$valid && scope.albumImageFile) {
	        scope.uploadAlbumArt(scope.albumImageFile)
	      }
   	 	}

   	 	//starter function for adding album art
	  	scope.username = 'TEST USERNAME'
	  	scope.uploadAlbumArt = function (file) {
	  		const url = '/../api/createAlbum'
        Upload.upload({
            url: '/../api/createAlbum',
            data: {file: file, albumUserName: scope.username, albumArtist: scope.artistName, albumName: scope.albumName},
            file: file
        }).then(function (res) {
            console.log('Success ' + res.config.data.file.name + 'uploaded. Response: ' + res.data)
        }, function (res) {
            console.log('Error status: ' + res.status)
        }, function (evt) {
            var progressPercentage = parseInt(100.0 * evt.loaded / evt.total)
            console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name)
        })
	    }

	    /*scope.uploadAlbumTrack = function(file) {

	    }
*/



	  },

	  controller: function(){
	  }
	}
}])





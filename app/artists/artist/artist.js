angular.module('artist', [])
.directive('mxArtist', ['ngAudio', 'nowPlayingList', 'browseTestData', 'libraryData', '$http', 'Upload', 'artistData', '$routeParams', '$location', function(ngAudio, nowPlayingList, browseTestData, libraryData, $http, Upload, artistData, $routeParams, $location){
	return {
		restrict: 'E',
	  templateUrl: 'artists/artist/artist.html',
	  scope: {},
	  transclude: true,
	  controllerAs: "aac",
	  
	  link: function(scope, element, attrs){

	  	window.scrollTo(0, 0)
	  	scope.artists = ''

	  	getArtists();
	    function getArtists() {
	      artistData.getArtists()
        .then(function (response) {
          scope.artists = response.data.artists
          artistData.artists = scope.artists
          console.log(scope.artists)

          //this is abominable, must be fixed
          //artist name from URL
			  	scope.currentArtistName = $routeParams.artist;
			  	//search the artists list for the right artist
			  	//this function MUST be fixed to work directly with entire database.//
			  	//!!!!!!!!!!!!!!//
			  	scope.currentArtist = scope.artists.filter(function(obj) {
			    		return obj.artistName.replace(/\s+/g, '-').toLowerCase() === scope.currentArtistName.replace(/\s+/g, '-').toLowerCase();
					})[0];


        }, function (error) {
          console.log('failure to load')
        })
	    }

	    
			
			console.log(scope.currentArtist)




	  
	  },

	  controller: function(){
	  }
	}
}])
const fs = require('fs')
const path = require('path')
const uuid = require('uuid')
const mv = require('mv')
const mkdirp = require('mkdirp-promise')
const {Artist} = require('../artistModel');

createAlbum = function() {};




createAlbum.prototype.uploadFile = function(req, res) {
  var file = req.files.file;
  //id for storage
  const albumId = uuid.v4()

  console.log('received request')

  console.log(Artist.findOne({artistName: req.body.albumArtist}))/*

  const albumDirectory = '/Users/maxfrecka/Desktop/PROJECTS/doga-forum/backend/file-system/artists/'+artistId
  const artistDirectoryImages = artistDirectory + '/images/'
  const artistDirectoryTemps = artistDirectory + '/temps/'


  makeDirs = function(callback){
      mkdirp(artistDirectory, function (err) {
        if (err) console.error(err)
        else mkdirp(artistDirectoryImages,function (err) {
          if (err) console.error(err)
          else mkdirp(artistDirectoryTemps,function (err) {
            if (err) console.error(err)
            else callback()
          })
        })    
      })
    }






  const dateAdded = new Date()
  //defines path for the album art
  const albumArt = artistId + '/albums/' + req.body.albumName + '/images/' req.files.file.name
  Artist
    .findOneAndUpdate({artistName: req.body.albumArtist}, 
      {$addToSet: {albums: 
        {
          albumName: req.body.albumName, 
          albumArtist: req.body.albumArtist, 
          albumUserName: req.body.albumUserName,
          albumId: albumId,
          dateAdded: dateAdded,
          albumArt: albumArt

        }}}  
    .then(artist => res.status(204).end())
    .catch(err => res.status(500).json({message: 'Internal server error'}));







  var file = req.files.file;
  var tmp_path = file.path;
  var target_path = path.join(__dirname, '/file-system/artists/' + req.body.albumArtist + 'images' + file.name)
  var src = fs.createReadStream(tmp_path);
  var dest = fs.createWriteStream(target_path);
  src.pipe(dest);
*/
}

module.exports = new createAlbum();
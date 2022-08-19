const db = require('./db')
//const Sequelize = require("sequelize");
// require each of your models here...
const Album = require('./album');
const Artist = require('./artist');
const Song = require('./song');
// ...and give them some nice associations here!
Artist.hasMany(Album);
Album.hasMany(Song);
Album.belongsTo(Artist);
Song.belongsTo(Album);
Song.belongsTo(Artist);
Artist.hasMany(Song);


module.exports = {
  db,
  Artist,
  Song,
  Album
  // Include your models in your module.exports as well!
  // The seed file expects to find them there!
}

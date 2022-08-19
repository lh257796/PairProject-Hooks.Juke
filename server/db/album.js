const Sequelize = require('sequelize');
const db = require('./db');

const Album = db.define('album', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    artworkUrl: {
        type: Sequelize.STRING,
        defaultValue: 'defaul-album.jpg'
    }
}
);

module.exports = Album;
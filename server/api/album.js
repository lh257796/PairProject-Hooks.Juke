const router = require('express').Router()
const Album = require('../db/album')
const Artist = require('../db/artist')
const Song = require('../db/song')

router.get('/', async (req, res, next) => {
    try{
        const albums = await Album.findAll({
            include: {
                model: Artist,
                as: 'artist'
            }
        });
        res.send(albums);
    }
    catch(err){
        next(err);
        }
});

router.get('/:albumId', async (req, res, next) => {
    try{
        const album = await Album.findByPk(req.params.albumId, {
            include: [
                {
                    model: Artist,
                    as: 'artist'
                },
                {
                    model: Song,
                    as: 'songs'
                }
            ]
        });
        res.send(album);
    }
    catch(err){
        next(err);
        }
});

module.exports = router;
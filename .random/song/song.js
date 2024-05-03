const mongoose = require('mongoose');

const songmodel = mongoose.Schema({
    SongName: String,
    FilmName: String,
    MusicDirector:  String,
    Singer: String,
    Actor: String,
    Actress: String
})

module.exports = mongoose.model('songs',songmodel)
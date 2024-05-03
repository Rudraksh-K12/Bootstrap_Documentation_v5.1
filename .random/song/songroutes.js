const express = require('express')
const router = express.Router()


const {addData,getData,getMusicByDir,getMusicByDirandSinger,deleteSong,getMusicBySingerandFilm,updateDoc} = require('./songcontroller')

router.post('/',addData)
router.get('/',getData)

router.post('/getMusicByDir',getMusicByDir)
router.post('/getMusicByDirandSinger',getMusicByDirandSinger)
router.delete('/deleteSong',deleteSong)
router.post('/getMusicBySingerandFilm',getMusicBySingerandFilm)
router.put('/updateDoc',updateDoc)

module.exports = router
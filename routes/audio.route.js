const express = require('express')
const router = express.Router()

const {
   renderAudio
} = require('../controllers/audio.controller')

//@route GET /audio
router.get('/', renderAudio);

module.exports = router

const express = require('express')
const router = express.Router()

const {
   renderAudio
} = require('../controllers/audio.controller')

//@route GET /audio?filename=${filename}
//@decs get render audio files
// if filename exists, audio will be sent to client
router.get('/', renderAudio);

module.exports = router

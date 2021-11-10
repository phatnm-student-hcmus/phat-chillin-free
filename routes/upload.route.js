const express = require('express')
const router = express.Router()
const { upload } = require('../config/upload')

//GET @route /upload
router.get('/', (req, res, next) => {
   res.render('upload')
})

router.post('/', upload.single('file'), (req, res, next) => {
   res.redirect('/upload')
})

module.exports = router

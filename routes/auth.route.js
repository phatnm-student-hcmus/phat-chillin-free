const express = require('express')
const router = express.Router()

//@route /auth/facebook
router.get('/facebook', (req, res, next) => {
   res.redirect('/')
})

//@route /auth/google
router.get('/google', (req, res, next) => {
   res.redirect('/')
})

//@route /auth/local
router.get('/local', (req, res, next) => {
   res.redirect('/')
})

module.exports = router

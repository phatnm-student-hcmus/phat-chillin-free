const express = require('express')
const router = express.Router()

//@route /users
router.get('/', (req, res, next) => {
  res.send('respond with a resource')
})

//@route /users/sign-in
router.get('/sign-in', (req, res, next) => {
   res.render("sign-in",{title: "ChillinFree - Sign In"})
})

//@route /users/sign-up
router.get('/sign-up', (req, res, next) => {
   res.render("sign-up",{title: "ChillinFree - Sign In"})
})
module.exports = router

const express = require('express')
const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
   res.render("home-page", { title: "ChillnFree" })
})

router.get('/singed-in', (req, res, next) => {
   // console.log('reached the home signed in route')
   res.render("home-signed-in", {
      title: "ChillnFree",
      nameOfAccount: "Account",
   })
})
module.exports = router

const express = require('express')
const router = express.Router()
const path = require('path')

//regex string
//says that path could start (^) or end ($) with the / 
//or (|) it could be index
//and it might have html at the end but doesn't need it (that's what the (html)? is for)
router.get('^/$|/index(.html)?', (req, res) => {
     //will result in leaving the routes folder (..) and going into views folder and into index.html file
     res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))
})

module.exports = router
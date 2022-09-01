const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
  res.send("you're at the root route")
})

module.exports = router
const express = require('express')
const router = express.Router()
const postControllers = require('../controllers/postControllers.js')

router.get('/' ,postControllers.index)


module.exports = router
const express = require('express')
//define the router instance
const router = express.Router()

const postControllers = require('../controllers/postControllers.js')

router.get('/', postControllers.index)
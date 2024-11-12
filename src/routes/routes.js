const { Router } = require('express')
const { getHomePage } = require('../controllers/controllers')
const router = Router()

router.get('/', getHomePage )

module.exports = router
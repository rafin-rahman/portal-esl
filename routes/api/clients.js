const express = require('express')
const router = express.Router()

// @route   GET api/clients
// @desc    Clients route
// @access  Public
router.get('/', (req, res) => res.send('Clients route'))

module.exports = router

const express = require('express')
const router = express.Router()

// @route   GET api/university
// @desc    University route
// @access  Public
router.get('/', (req, res) => res.send('University route'))

module.exports = router

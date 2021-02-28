const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Course = require('../../models/Course')

// @route   POST api/course
// @desc    Course route
// @access  Public
router.get(
  '/',
  [
    check('name', 'Course name is empty').not().isEmpty(),
    check('university', 'Course must be part of a University').not().isEmpty(),
    check('category', 'Course must have a category').contains([
      'foundation',
      'fdy2TwoYears',
      'hnd',
      'undergraduate',
      'accelerated',
      'postgraduate',
      'topUp',
      'other',
    ]),
    check('duration', 'Course duration cannot be more than 4').isInt({
      min: 1,
      max: 4,
    }),
    check('studyMode', 'Must select a course option').not().isEmpty(),
    check('delivery', 'Must a course delivery option').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, university, category, duration } = req.body
  }
)

module.exports = router

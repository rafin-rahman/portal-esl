const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Course = require('../../models/Course')
const University = require('../../models/University')

// @route   POST api/course
// @desc    ADD a new course
// @access  Public
router.post(
  '/',
  [
    check('name', 'Course name is empty').not().isEmpty(),
    check('university', 'Course must be part of a University').not().isEmpty(),
    check(
      'duration',
      'Course duration cannot be more than 4 or less than a year'
    ).isInt({
      min: 1,
      max: 4,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, university, category, duration } = req.body

    let universityModel = await University.findOne({ name: university })
    let courseModel = await Course.find({
      name,
      university: universityModel.id,
    })
    try {
      if (!universityModel) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'University not found' }] })
      }
      if (courseModel.length > 0) {
        console.log(courseModel)
        return res.status(400).json({
          errors: [{ msg: `This course already exists at ${university}` }],
        })
      }

      let course = new Course({
        name,
        university: universityModel.id,
        category,
        duration,
      })
      await course.save()
      return res.status(200).send({ msg: 'Course added successfully' })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router

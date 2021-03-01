const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const Client = require('../../models/Client')
const User = require('../../models/User')
const University = require('../../models/University')
const Course = require('../../models/Course')

// @route   POST api/clients
// @desc    ADD a new client
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('surname', 'Surname is required').not().isEmpty(),
    check('email', 'Type a valid email').isEmail(),
    check('telephone', 'Type a valid telephone number').not().isEmpty(),
    check('qualification', 'Select a qualification').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const {
      name,
      surname,
      email,
      telephone,
      qualification,
      university,
      course,
      comment,
      submittedBy,
      intake,
    } = req.body

    let marketingOfficer = await User.findOne({ email: submittedBy })

    let universityModel = await University.findOne({ name: university })
    if (!universityModel) {
      return res.status(400).json({
        errors: [
          {
            msg: `${university} does not exists`,
          },
        ],
      })
    }
    let courseModel = await Course.findOne({
      name: course,
      university: universityModel.id,
    })
    let checkClientExist = await Client.findOne({
      email,
    })

    try {
      if (!marketingOfficer) {
        return res.status(400).json({
          errors: [
            {
              msg: `This Marketing Officer does not exists`,
            },
          ],
        })
      }

      if (!universityModel) {
        return res.status(400).json({
          errors: [
            {
              msg: `${university} does not exists`,
            },
          ],
        })
      }
      if (!courseModel) {
        return res.status(400).json({
          errors: [{ msg: `'${course}' does not exists at ${university}` }],
        })
      }

      if (checkClientExist) {
        return res.status(400).json({
          errors: [{ msg: `${name} ${surname} is already on our system` }],
        })
      }
      let applications = [
        { university: universityModel.id, course: courseModel.id },
      ]
      let client = new Client({
        name,
        surname,
        email,
        telephone,
        qualification,
        applications,
        comment,
        intake,
      })

      await client.save()
      return res.status(200).send({ msg: 'client added' })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router

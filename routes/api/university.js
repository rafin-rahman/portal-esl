const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')

const University = require('../../models/University')

// @route   POST api/university
// @desc    ADD a new University
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('campuses', 'Must have at least one campus').not().isEmpty(),
    check('intake', 'Must have at least one intake').not().isEmpty(),
    check('requirements', 'Select at least one requirement').not().isEmpty(),
    check('deadline', 'Select an approximate deadline for the current intake')
      .not()
      .isEmpty(),
    check('prepLink', 'Paste the correct preparation link').not().isEmpty(),
    check('prepDays', 'Select the dates for the preparation').not().isEmpty(),
    check('officialLink', 'Insert the University link').not().isEmpty(),
    check(
      'commissionBasic',
      'Insert the marketing staff commission for this University'
    )
      .not()
      .isEmpty(),
    check('commissionAdmin', 'Insert the admin commission for this University')
      .not()
      .isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    const {
      name,
      campuses,
      intake,
      requirements,
      deadline,
      prepLink,
      prepDays,
      officialLink,
      commissionBasic,
      commissionAdmin,
    } = req.body

    try {
      let university = await University.findOne({ name: name })
      if (university) {
        return res.status(400).json({
          errors: [{ msg: 'University with the same name already exists' }],
        })
      }
      university = new University({
        name,
        campuses,
        intake,
        requirements,
        deadline,
        prepLink,
        prepDays,
        officialLink,
        commissionBasic,
        commissionAdmin,
      })

      await university.save()
      return res.status(200).send({ msg: 'University added successfully' })
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router

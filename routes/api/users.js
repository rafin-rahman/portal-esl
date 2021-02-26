const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')

// @route   POST api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('surname', 'Surname is required').not().isEmpty(),
    check('email', 'Type a valid company email').isEmail(),
    check('password', 'Enter a password with 6 or more characters').isLength({
      min: 6,
    }),
    check('branch', 'Select your branch').isLength({ min: 1 }),
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, surname, email, password, branch } = req.body
    const unique_name = email.substring(0, email.indexOf('@'))
    const permission = 'basic'
    const formURL = `www.elizabethschool.com/agent/${unique_name}`
    const employed = true
    const university = ''
    try {
      // check if user exist
      let user = await User.findOne({ email: email })
      if (user) {
        return res.status(400).json({ errors: [{ msg: 'User already exist' }] })
      }

      user = new User({
        name,
        surname,
        email,
        password,
        permission,
        formURL,
        branch,
        employed,
        university,
      })
      // Password hashing
      const salt = await bcrypt.genSalt(10)
      user.password = await bcrypt.hash(password, salt)

      await user.save()

      const payload = {
        user: {
          id: user.id,
        },
      }
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 604800 },
        (err, token) => {
          if (err) throw err
          res.json({ token })
        }
      )
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
  }
)

module.exports = router

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token')
  // Check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, auth denied' })
  }

  // Verify token
  try {
    // Decode the token (visit jwt.io)
    const decoded = jwt.verify(token, config.get('jwtSecret'))
    // Find user from the token
    req.user = decoded.user
    next()
  } catch (err) {
    res.status(401).json({ msg: 'Token not valid' })
  }
}

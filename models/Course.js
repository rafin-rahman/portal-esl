const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  university: {
    university: { type: mongoose.Schema.Types.Object, ref: 'university' },
  },
  level: {
    type: String,
    enum: [
      'foundation',
      'fdy2TwoYears',
      'hnd',
      'undergraduate',
      'accelerated',
      'postgraduate',
      'topUp',
      'other',
    ],
  },
  duration: {
    type: Number,
  },
  delivery: {
    type: String,
    enum: ['day', 'evening', 'weekend'],
    default: 'day',
  },
})

module.exports = Course = mongoose.model('course', courseSchema)

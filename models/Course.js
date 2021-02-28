const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  university: {
    university: { type: mongoose.Schema.Types.Object, ref: 'university' },
  },
  category: {
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
    required: true,
  },
  studyMode: {
    type: String,
    enum: ['day', 'evening', 'weekend'],
    default: 'day',
  },
  delivery: {
    type: String,
    enum: ['online', 'blended', 'onCampus'],
    default: 'onCampus',
  },
})

module.exports = Course = mongoose.model('course', courseSchema)

const mongoose = require('mongoose')
const courseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  university: {
    type: mongoose.Schema.Types.Object,
    ref: 'university',
    required: true,
  },
  category: {
    type: String,
    enum: [
      'foundation',
      'fdy2TwoYears',
      'hnd',
      'undergraduate',
      'postgraduate',
      'topUp',
      'phd',
      'other',
    ],
    default: 'undergraduate',
  },
  accelerated: { type: Boolean, default: false },
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

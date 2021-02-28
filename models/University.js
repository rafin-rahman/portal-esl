const mongoose = require('mongoose')
const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  campuses: [String],
  intake: [String],
  course: [
    {
      course: { type: mongoose.Schema.Types.Object, ref: 'course' },
    },
  ],
  requirements: [
    'shareCode',
    'id',
    'qualification',
    'cv',
    'transcript',
    'qualificationTranslation',
    'transcriptTranslation',
    'reference',
    'characterReference',
    'portfolio',
    'proofOfAddress',
  ],
  deadline: { type: Date },
  archived: {
    type: Boolean,
    default: false,
  },
  prepLink: {
    type: String,
  },
  prepDay: [Date],
  customContent: {
    type: String,
  },
  officialLink: {
    type: String,
    required: true,
  },
  commissionBasic: {
    type: Number,
  },
  commissionAdmin: {
    type: Number,
  },
})

module.exports = University = mongoose.model('university', UniversitySchema)

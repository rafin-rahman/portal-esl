const mongoose = require('mongoose')

// TODO: add Uni logo in the model
const UniversitySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  campuses: [{ name: { type: String }, address: { type: String } }],
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
  prepDays: [String],
  customContent: {
    type: String,
    default: '',
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

module.exports = University = mongoose.model(
  'university',
  UniversitySchema,
  'university'
)

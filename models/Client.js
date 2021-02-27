const mongoose = require('mongoose')
const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  telephone: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    enum: ['none', 'diploma', 'degree'],
    default: 'none',
  },
  university: {
    university: { type: mongoose.Schema.Types.Object, ref: 'university' },
  },
  course: {
    course: { type: mongoose.Schema.Types.Object, ref: 'course' },
  },
  delivery: {
    course: { type: mongoose.Schema.Types.Object, ref: 'course' },
  },
  comment: {
    type: String,
  },
  submittedBy: {
    user: { type: mongoose.Schema.Types.Object, ref: 'user' },
  },
  notificationBasic: {
    type: Boolean,
  },
  notificationAdmin: {
    type: Boolean,
  },
  status: {
    type: String,
    enum: ['cancel', 'new', 'submitted', 'unconditional', 'enrolled'],
    default: 'new',
  },
  statusAdmin: {
    type: String,
    enum: ['ready', 'notReady', 'notSuitable'],
    default: 'notReady',
  },
  sfe: {
    type: Boolean,
    default: false,
  },
  dateOfContact: {
    type: Date,
    default: Date.now,
  },
  dateOfSubmit: {
    type: Date,
  },
  dateOfUncon: {
    type: Date,
  },
})

module.exports = Client = mongoose.model('client', ClientSchema)

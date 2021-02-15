const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },

  permission: {
    type: String,
    enum: ['basic', 'admin', 'manager', 'boss', 'superuser'],
    default: 'basic',
  },
  formURL: { type: String, required: true },
  branch: { type: Array, default: [] },
  employed: { Type: Boolean, default: true },
  created: { type: Date, default: Date.now },
  university: { type: mongoose.Schema.Types.Object, ref: 'university' },
})

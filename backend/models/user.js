const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: [true, 'A user should have a firstname']
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: [true, 'A user should have a lastname']
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'A user should have a valid email']
  },
  password: {
    type: String,
    minlength: 6,
    required: [true, 'A user should have a password'],
    select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, 'please confirm password'],
    validate: {
      validator: function (value) {
        return this.password === value
      },
      message: 'Passwords do not match'
    }
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user'
  },
  active: {
    type: Boolean,
    default: true
  },
  passwordChangedAt: {
    type: Date
  },
  passwordResetToken: String,
  passwordResetTokenExpires: Date
})

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }
  this.password = await bcrypt.hash(this.password, 12)
  this.passwordConfirm = undefined
  next()
})

userSchema.methods.comparePassword = async function (password) {
  const auth = await bcrypt.compare(password, this.password)

  return auth
}

userSchema.methods.passwordChangedAfter = function (val) {
  if (this.password.passwordChangedAt > val) {
    return true
  }
  return false
}

userSchema.methods.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString('hex')
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(token)
    .digest('hex')

  return token
}

const User = mongoose.model('User', userSchema)

module.exports = User

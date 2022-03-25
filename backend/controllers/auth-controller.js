const jwt = require('jsonwebtoken')
const AppError = require('../utils/app-error')
const catchAsync = require('../utils/catch-async')
const User = require('./../models/user')

const signToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })

  return token
}

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm
  })

  console.log(user)
  console.log('the got here')
  if (!user) return next(new AppError('Error creating user', '401'))

  const token = signToken(user._id)

  res.status(200).json({
    message: 'success',
    data: {
      user
    },
    token
  })
})

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({ email: email }).select('+password')

  if (!user)
    return next(new AppError('User not found, please create an account', '404'))

  const auth = await user.comparePassword(password)
  if (!auth)
    return next(new AppError('Email or Password is not correct, try again'))

  const token = signToken(user._id)

  if (!token) next(new AppError('Error logging in, try again', '400'))

  res.status(200).json({
    message: 'success',
    data: {
      user
    },
    token
  })
})

exports.protect = catchAsync(async (req, res, next) => {
  let token
  if (
    req.headers.authorization ||
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1]
  }

  if (!token)
    return next(new AppError('Login to get access to this resource', '401'))
  const decoded = jwt.verify(token, process.env.JWT_SECRET)

  const user = await User.findOne({ id: decoded.id })

  if (!user) return next(new AppError('No user found', '400'))

  const auth = user.passwordChangedAfter(decoded.iat)

  if (auth)
    return next(
      new AppError('Password was recently changed, Login again ', '401')
    )

  req.user = user
  next()
})

exports.getMe = catchAsync((req, res, next) => {
  // some code
  res.end()
})

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // user provides thier email
  const email = req.body.email
  if (!email)
    return next(new AppError('Please provide a valid email address', '400'))
  // I check if that email exists in my database
  const user = await User.findOne({ email: email })
  if (!user)
    return next(new AppError('User not found, create an account', '401'))
  // I create a token and encrypt it
  const token = user.createPasswordResetToken()

  // I save the encrypted one to the database
  // I set a time to the database to expire the token after 10 minutes
  user.passwordResetTokenExpires = new Date().getTime()
  await user.save()
  // if a user with the email exists then I compose an email and send a token with the mail to reset to the user
  // send Email
})

exports.resetPassword = catchAsync(async (req, res, next) => {
  //the user provides the new password and password confirm
  //
})

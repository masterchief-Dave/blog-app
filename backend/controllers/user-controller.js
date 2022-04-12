const User = require('../models/user')
const catchAsync = require('./../utils/catch-async')
const AppError = require('./../utils/app-error')

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file)
  console.log(req.body)
  const userId = req.user._id

  if (!userId) return next(new AppError('Login to update your account', '401'))

  const allowedUpdate = ['firstName', 'lastName', 'photo', 'email']

  const userObj = { ...req.body }

  for (const x in userObj) {
    if (!allowedUpdate.includes(x)) {
      delete userObj[x]
    }
  }

  const user = await User.findByIdAndUpdate(userId, userObj, {
    new: true
  })

  res.status(200).json({
    message: 'success',
    data: {
      user
    }
  })
})

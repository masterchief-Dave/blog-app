const User = require("../models/user");
const catchAsync = require("./../utils/catch-async");
const AppError = require("./../utils/app-error");

exports.updateMe = catchAsync(async (req, res, next) => {
  if (req.body.password)
    return next(
      new AppError("this is not the route to update password", "401")
    );

  const userId = req.user._id;

  if (!userId) return next(new AppError("Login to update your account", "401"));

  const allowedUpdate = [
    "firstName",
    "lastName",
    "photo",
    "email",
    "linkedin",
    "twitter",
    "github",
    "stackoverflow",
    "position",
  ];

  const userObj = { ...req.body };

  for (const x in userObj) {
    if (!allowedUpdate.includes(x)) {
      delete userObj[x];
    }
  }

  const user = await User.findByIdAndUpdate(userId, userObj, {
    new: true,
  });

  res.status(200).json({
    message: "success",
    data: {
      user,
    },
  });
});

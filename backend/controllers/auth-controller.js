const jwt = require("jsonwebtoken");
const AppError = require("../utils/app-error");
const catchAsync = require("../utils/catch-async");
const User = require("./../models/user");
const Email = require("./../utils/Email");
const crypto = require("crypto");

const signToken = (id) => {
  const token = jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

exports.signup = catchAsync(async (req, res, next) => {
  const user = await User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    photo: req.body.photo,
    twitter: req.body.twitter,
    github: req.body.github,
    linkedin: req.body.linkedin,
    stackoverflow: req.body.stackoverflow,
    position: req.body.position,
  });

  if (!user) return next(new AppError("Error creating user", "401"));

  const activateToken = user.createAccountActivate();
  console.log(activateToken);
  await user.save({ validateBeforeSave: false });
  const url = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/activate/${activateToken}`;

  // send email part
  new Email(user, url).sendWelcome();
  const token = signToken(user._id);

  res.status(200).json({
    message: "success",
    data: {
      user,
    },
    token,
  });
});

exports.activate = catchAsync(async (req, res, next) => {
  // some code
  // 1, get the token from the link
  // 2, hash the token
  // 3, use the hashed token to look for the person in the database
  // change the active property from false to true
  const token = req.params.id;
  const hashedToken = crypto.createHash("sha256").update(token).digest("hex");
  // console.log(hashedToken)

  const user = await User.findOne({
    accountActivateToken: hashedToken,
  });
  // console.log(user)
  user.active = true;
  await user.save({ validateBeforeSave: false });

  res.status(200).json({
    message: "account verified",
    data: {
      user,
    },
  });
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email }).select("+password");

  // console.log(user);
  if (user?.active === false)
    return next(new AppError("Please activate your account", "401"));

  if (!user)
    return next(
      new AppError(
        "User not found, please create an account / activate your account ",
        "404"
      )
    );
  // console.log(user);

  const auth = await user.comparePassword(password);
  if (!auth)
    return next(
      new AppError("Email or Password is not correct, try again", "401")
    );

  const token = signToken(user._id);

  if (!token) next(new AppError("Error logging in, try again", "400"));

  res.status(200).json({
    message: "success",
    data: {
      user,
    },
    token,
  });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization ||
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token)
    return next(new AppError("Login to get access to this resource", "401"));
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findOne({ id: decoded.id });

  if (!user) return next(new AppError("No user found", "400"));

  const auth = user.passwordChangedAfter(decoded.iat);

  if (auth)
    return next(
      new AppError("Password was recently changed, Login again ", "401")
    );

  req.user = user;
  next();
});

exports.getMe = catchAsync((req, res, next) => {
  // some code
  res.end();
});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // user provides thier email
  const email = req.body.email;
  if (!email)
    return next(new AppError("Please provide a valid email address", "400"));

  const user = await User.findOne({ email: email });
  if (!user)
    return next(new AppError("User not found, create an account", "401"));

  const resetToken = user.createPasswordResetToken();

  user.passwordResetTokenExpires = new Date().getTime();
  await user.save({ validateBeforeSave: false });

  const url = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/users/resetpassword/${resetToken}`;
  // send Email
  new Email(user, url)
    .sendPasswordReset()
    .then(() => {
      res.status(200).json({
        status: "success",
        message: "Reset email sent!",
      });
    })
    .catch(async (err) => {
      console.log(err);
      user.createPasswordResetToken = undefined;
      user.passwordResetTokenExpires = undefined;
      await user.save({ validateBeforeSave: false });
      res.status(200).json({
        status: "fail",
        message: "Error sending reset email, try again!",
      });
    });
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  //the user provides the new password and password confirm
  const { password, passwordConfirm } = req.body;

  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.id)
    .digest("hex");
  const user = await user.findOne({
    passwordResetToken: hashedToken,
    passwordResetTokenExpires: { $gt: Date.now() },
  });

  if (!user) return next(new AppError("No user found", "404"));

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.passwordResetToken = undefined;
  user.passwordResetTokenExpires = undefined;
  user.passwordChangedAt = new Date().getTime();

  await user.save();

  const token = signToken(user._id);

  res.status(200).json({
    message: "success",
    data: {
      user,
    },
    token,
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).select("+password");
  if (!user)
    return next(
      new AppError(
        "cannot access this resource, login to update password",
        "400"
      )
    );

  const { oldPassword, password, passwordConfirm } = req.body;

  const auth = user.comparePassword(oldPassword);
  if (!auth) return next("password is not correct", "401");

  user.password = password;
  user.passwordConfirm = passwordConfirm;
  user.passwordChangedAt = new Date().getTime();
  await user.save();

  const token = signToken(user._id);
  res.status(200).json({
    message: "success",
    data: {
      user,
    },
  });
});

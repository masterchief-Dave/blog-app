const User = require("../models/user");
const catchAsync = require("./../utils/catch-async");
const AppError = require("./../utils/app-error");
const multer = require('multer')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/img/users')
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1]
    cb(null, `user-${req.user._id}-${Date.now()}.${ext}`)
  }
})

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    return cb(null, true)
  }
  cb(new AppError('Not an image, please upload only images'), false)
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

exports.uploadUserPhoto = upload.single('photo')

exports.updateMe = catchAsync(async (req, res, next) => {
  console.log(req.file)
  console.log(req.user)
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

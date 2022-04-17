const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: [true, "A user should have a firstname"],
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: [true, "A user should have a lastname"],
  },
  email: {
    type: String,
    unique: true,
    trim: true,
    required: [true, "A user should have a valid email"],
  },
  password: {
    type: String,
    minlength: 6,
    trim: true,
    required: [true, "A user should have a password"],
    // select: false
  },
  passwordConfirm: {
    type: String,
    required: [true, "please confirm password"],
    trim: true,
    validate: {
      validator: function (value) {
        return this.password === value;
      },
      message: "Passwords do not match",
    },
  },
  role: {
    type: String,
    enum: ["user", "admin", "moderator"],
    default: "user",
  },
  position: {
    type: String,
  },
  active: {
    type: Boolean,
    default: false,
  },
  photo: {
    type: String,
  },
  position: {
    type: String,
    default: "",
  },
  twitter: {
    type: String,
    default: "",
  },
  github: {
    type: String,
    default: "",
  },
  stackoverflow: {
    type: String,
    default: "",
  },
  linkedin: {
    type: String,
    default: "",
  },
  passwordChangedAt: {
    type: Date,
  },
  passwordResetToken: String,
  passwordResetTokenExpires: Date,
  accountActivateToken: String,
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;
  next();
});

userSchema.methods.comparePassword = async function (password) {
  const auth = await bcrypt.compare(password, this.password);

  return auth;
};

userSchema.methods.passwordChangedAfter = function (val) {
  if (this.passwordChangedAt) {
    const auth = this.passwordChangedAt > val;
    return auth;
  }
  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  this.passwordResetTokenExpires = Date.now() + 10 * 60 * 1000;

  return token;
};

userSchema.methods.createAccountActivate = function () {
  const token = crypto.randomBytes(32).toString("hex");
  this.accountActivateToken = crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

  return token;
};

// userSchema.pre(/^find/, function (next) {
//   this.find({ active: { $ne: false } })

//   next()
// })

const User = mongoose.model("User", userSchema);

module.exports = User;

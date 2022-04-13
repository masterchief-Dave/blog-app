const express = require("express");
const userRoutes = require("./routes/user-routes");
const postRoutes = require("./routes/post-routes");
const globalErrorController = require("./controllers/error-controller");
const AppError = require("./utils/app-error");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.all("*", (req, res, next) => {
  return next(new AppError("Route cannot be found", "404"));
});

app.use(globalErrorController);

module.exports = app;

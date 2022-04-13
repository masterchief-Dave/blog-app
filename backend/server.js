require("dotenv").config({
  path: "./backend/.env",
});
const mongoose = require("mongoose");
const app = require("./app");

const uri = process.env.URI;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to the database successfully");
  })
  .catch((err) => {
    console.log(err);
    console.log("error connecting to the database");
  });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`application started on ${PORT}`);
});

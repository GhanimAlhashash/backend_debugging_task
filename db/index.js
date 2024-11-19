const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.error(err);
  });

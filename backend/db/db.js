const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blog")
  .then(() => {
    console.log("Mongodb is connected");
  })
  .catch((err) => {
    console.log("failed to connect to mongodb", err);
  });

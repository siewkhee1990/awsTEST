require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const frontEndUrl = process.env.FRONT_END_URL || "localhost:3000";

//middlewares
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", frontEndUrl);
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS, PATCH"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, x-access-token, Cookie, Content-Type, access_token, Accept"
  );
  next();
});

//this will catch any route that doesn't exist
app.get("*", (req, res) => {
  console.log("endpoint reached");
  res.status(200).json("Endpoint Successful!");
});

app.listen(port, () => {
  console.log("I am listening to port:", port);
});

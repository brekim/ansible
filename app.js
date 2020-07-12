var express = require("express");
var path = require("path");
// var favicon = require("serve-favicon");
var logger = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
var mongoose = require("mongoose");
mongoose.Promise = require("bluebird");
mongoose
  .connect("mongodb://localhost/mevn-secure", {
    promiseLibrary: require("bluebird")
  })
  .then(() => console.log("connection successful"))
  .catch(err => console.error(err));
app.use(cors());
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(express.static(path.join(__dirname, "dist")));

var auth = require("./routes/auth");
app.use("/api/auth", auth);

var chat = require("./routes/chat");
app.use("/api/chat", chat);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// restful api error handler
app.use(function(err, req, res, next) {
  console.log(err);
  console.log(next);
  if (req.app.get("env") !== "development") {
    delete err.stack;
  }

  res.status(err.statusCode || 500).json(err);
});

module.exports = app;

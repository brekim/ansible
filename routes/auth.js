// var mongoose = require("mongoose");
var passport = require("passport");
var settings = require("../config/settings");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var User = require("../models/user");
var bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  const { username, password } = req.body;
  const hashCost = 10;
  try {
    const passwordHash = await bcrypt.hash(password, hashCost);
    const userDocument = new User({ username, passwordHash });
    await userDocument.save();

    res.status(200).send({ username });
  } catch (error) {
    res.status(400).send({
      error: "req body should take the form {username, password}"
    });
  }
});

router.post("/login", (req, res) => {
  passport.authenticate("local", { session: false }, (error, user) => {
    if (error || !user) {
      res.status(400).json({ error });
    }

    /** This is what ends up in our JWT */
    const payload = {
      username: user.username,
      expires: Date.now() + parseInt(process.env.JWT_EXPIRATION_MS)
    };

    /** assigns payload to req.user */
    req.login(payload, { session: false }, error => {
      if (error) {
        res.status(400).send({ error });
      }

      /** generate a signed json web token and return it in the response */
      const token = jwt.sign(JSON.stringify(payload), settings.secret);

      /** assign our jwt to the cookie */
      res.cookie("jwt", jwt, { httpOnly: true, secure: true });
      res.status(200).send({ token });
    });
  })(req, res);
});

module.exports = router;

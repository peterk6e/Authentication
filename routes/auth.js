const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const rounds = 10;

const jwt = require("jsonwebtoken");
const tokenSecret = "my-token-secret";

const middleware = require('../middleware');

router.get("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then((user) => {
    if (!user) res.status(404).json({ error: "no user with that email found" });
    else {
      bcrypt.compare(req.body.password, user.password, (error, match) => {
        if (error) res.status(500).json(error);
        else if (match) res.status(200).json({ token: generateToken(user) });
        else res.status(403).json({ error: "passwords do not match" });
      });
    }
  });
});

router.post("/signup", (req, res) => {
  bcrypt.hash(req.body.password, rounds, (error, hash) => {
    if (error) res.status(500).json(error);
    else {
      const NewUser = User({ email: req.body.email, password: hash });
      NewUser.save()
        .then((user) => {
          res.status(200).json(user);
        })
        .catch((error) => {
          error.status(500).json(error);
        });
    }
  });
});

router.get('/jwt-test', middleware.verify, (req, res) => {
    res.status(200).json(req.user);
});

function generateToken(user) {
  return jwt.sign({ data: user }, tokenSecret, { expiresIn: "24h" });
}

module.exports = router;

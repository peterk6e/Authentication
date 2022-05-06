const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require('bcrypt');
const rounds = 10;

router.get("/login", (req, res) => {});

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

module.exports = router;

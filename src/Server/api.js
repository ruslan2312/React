const express = require('express');
const router = express.Router();
const User = require("./user");

router.get("/users", (req, res) => {
    User.find({}).skip(Number(req.query.skip)).limit(Number(req.query.limit))
        .then(user => {
            res.send(user);
        });
    let users = User.collection.find().count()
})

  router.get("/profile/:id", (req, res) => {
    User.find({}).skip(Number(req.query.skip)).limit(Number(req.query.limit))
        .then(user => {
          res.send(user[req.params.id])
        });
})

router.post("/users", (req, res) => {
    User.create(req.body)
        .then(user => {
            res.send(user);
        });
})

router.put("/users/:id", (req, res) => {
    res.send({ method: "PUT" })
})

router.delete("/users/:id", (req, res) => {
    res.send({ method: "DELETE" })
})

module.exports = router;
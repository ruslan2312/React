const express = require('express');
const router = express.Router();
const Auth = require("./auth");
const User = require("./user");


router.get("/users", (req, res) => {
    User.find({}).skip(Number(req.query.skip)).limit(Number(req.query.limit))
        .then(user => {
            res.send(user);
        });
})

router.get("/profile/:id", (req, res) => {
    User.find({}).skip(Number(req.query.skip)).limit(Number(req.query.limit))
        .then(user => {
            res.send(user[req.params.id])
        });
})

router.get("/auth", (req, res) => {
    Auth.find({}).then(auth => {
        res.send(auth[0])
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
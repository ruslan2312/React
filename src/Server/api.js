const express = require('express');
const router = express.Router();
const User = require("./user");


router.get("/users", (req, res) => {
    User.find({})
        .then(user => {
            res.send(user);
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
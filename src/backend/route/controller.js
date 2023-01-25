const express = require('express')
const router = express.Router()

const {
    getURLs,
    createURL,
    redirect,
    createUser,
    getUser,
    updateUser
} = require("../urls")

router
.get("/", getURLs)
.post("/", createURL)
.get("/:id", redirect)
.post("/user/", createUser)
.post("/user/:id", updateUser)
.get("/user/:id", getUser)

module.exports = router
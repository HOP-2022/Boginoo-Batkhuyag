const express = require('express')
const router = express.Router()

const {
    getURLs,
    createURL,
    redirect
} = require("../urls")

router
.get("/", getURLs)
.post("/", createURL)
.get("/:id", redirect)

module.exports = router
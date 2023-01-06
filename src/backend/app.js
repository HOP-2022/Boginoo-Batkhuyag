const express = require('express')
const urlRouter = require('./route/controller')
const connect = require('./db')
const app = express()
const port = 8080

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.json())
app.use('/', urlRouter)

connect()

app.get("/", (request, response) => {
    response.send("Hello Exp Server")
})

app.listen(port, () => {
    `Server is running at localhost:${port}`
})


const mongoose = require("mongoose")
const uri = `mongodb+srv://admin:adminpass@cluster-0.np6wc3s.mongodb.net/?retryWrites=true&w=majority`

const connect = async () => {
    try {
        await mongoose.connect(uri)
        console.log("Successfully connected to database.")
    } catch (error) {
        console.log(error)
    }
}

module.exports = connect

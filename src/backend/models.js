const {model , Schema} = require("mongoose")

const URLSchema = new Schema({
    _id: String,
    originalURL: String,
    postDate:{type:Date , default:Date.now},
});

const UserSchema = new Schema({
    email: String,
    password: String,
    username: String,
    creationDate:{type:Date , default:Date.now},
});


const URLModel = model("URLs" , URLSchema);
const UserModel = model("Users", UserSchema)

module.exports = [URLModel, UserModel];
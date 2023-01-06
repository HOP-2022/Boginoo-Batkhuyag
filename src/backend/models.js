const {model , Schema} = require("mongoose")

const URLSchema = new Schema({
    originalURL: String,
    postDate:{type:Date , default:Date.now},
});


const URLModel= model("URLs" , URLSchema);

module.exports = URLModel;
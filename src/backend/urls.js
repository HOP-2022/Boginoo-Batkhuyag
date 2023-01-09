const URLModel = require('./models')

async function generateId() {
    let id = ''
    let findId = await URLModel.findById(id)
    while(findId){
        const possibleCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
        for (let i = 0; i < 5; i++) {
            id += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length))
        }
        findId = await URLModel.findById(id)
    }
    return id
  }

exports.getURLs = async (request, response, next) => {
    response.status(200).json({
        urls: await URLModel.find()
    })
}


exports.redirect= async (request, response, next) => {
    const { id } = request.params
    const redir = await URLModel.findById(id)
    // response.redirect(redir.originalURL)
    response
    .status(200)
    .json({data: redir})
}

exports.createURL = async (request, response, next) => {
    const id = await generateId()
    const createPost = await URLModel.create({_id:id,...request.body})
    response
    .status(201)
    .json({message: "Post successfully created.", data: createPost})
}
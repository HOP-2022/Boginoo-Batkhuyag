const URLModel = require('./models')


exports.getURLs = async (request, response, next) => {
    response.status(200).json({
        urls: await URLModel.find()
    })
}


exports.redirect= async (request, response, next) => {
    const { id } = request.params
    const redir = await URLModel.findById(id)
    response.redirect(redir.originalURL)
}

exports.createURL = async (request, response, next) => {
    const createPost = await URLModel.create({...request.body})
    response
    .status(201)
    .json({message: "Post successfully created.", data: createPost})
}
const [URLModel, UserModel] = require('./models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'placeholder_secret'

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

exports.createUser = async (request, response, next) => {
    try{
        const {email, password, username} = req.body
        const preCheck = await UserModel.findOne({email:email})
        if(preCheck) {return response
            .status(409)
            .json({message:'user already exists'})
        }
        const pass = bcrypt.hash(password, 10)
        const createUser = await UserModel.create({
            username : username,
            email : email,
            password : pass
        })
        const token = jwt.sign({email: createUser.email, id: createUser._id}, SECRET_KEY)
        response
        .status(201)
        .json({message: "User successfully created.", data: createUser})
    }catch(err){
        console.log(err)
        response
        .status(500)
        .json({message: "Couldn't create user."})
    }
}

exports.login = async (request, response, next) => {
    try{
        const {email, password} = req.body;
        const existingUser = await User.findOne({email:email});
        if(!existingUser){
            return res
            .status(404)
            .json({message:'Incorrect Credentials'});
        }
        const matchPassword = await bcrypt.compare(password, existingUser.password);
        if(!matchPassword){
            return res
            .status(404)
            .json({message:'Incorrect Credentials'});
        }
        const token = jwt.sign({email:result.email, id:result._id}, SECRET_KEY);
        res.status(201).json({user:existingUser, token: token});
    } catch(error){
        console.log(error);
        res.status(500).json({message:"login attempt failed"});
    }
}

exports.getUser = async (request, response, next) => {
    const { id } = request.params
    const getUser = await UserModel.findById(id)
    response
    .status(200)
    .json({data: getUser})
}

exports.updateUser = async (request, response, next) => {
    const { id } = request.params
    UserModel.findByIdAndUpdate(id, {...request.body}, { returnDocument: 'after' },
        function (err, data){
            return err ? (
                response
                .status(500)
                .json({message:'unable to updated user data', data: err})
            ):(
                response
                .status(200)
                .json({message:'successfully updated user data', data: data})
            )
        }
    )
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
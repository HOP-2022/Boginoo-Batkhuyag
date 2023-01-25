const jwt = require('jsonwebtoken')
const SECRET_KEY = 'placeholder_secret'

module.exports.auth = (request, response, next) => {
    try{
        let user
        let token = request.headers.authorization
        token ? (
            token = token.split(' ')[1],
            user = jwt.verify(token, SECRET_KEY),
            request.userId = user.id
        ) : (
            response
            .status(401)
            .json({message: 'Not Authorized'})
        )
    }catch(err){
        console.log(err)
        response
        .status(401)
        .json({message: 'Not Authorized'})
    }
}
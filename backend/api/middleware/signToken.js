// IMPORTS
const JWT = require('jsonwebtoken')

// FUNCTION
    const sign_JWT = (req,res,next) => {
    console.log('req.body', req.body) // passed user information
    console.log(process.env.JWT_Secret)
        // -- //
        // Secret
            const secret = process.env.JWT_Secret
        // Options
            const options = {
                expiresIn: '1d'
            }
        // Sign Token
            const token = JWT.sign(
                req.body,
                secret,
                options
            )
            console.log('Created Token',token)
        // Next Middleware
            if( token ) {
                res.token = token
                // req.token = token
                next()
            } else {
                res.status(500).json( { error: 'unable to sign token'} )
                // req.status(500).json( { error: 'unable to sign token'} )
            }
    }
module.exports = sign_JWT
// IMPORTS
    const JWT = require('jsonwebtoken');
    // import sign_JWT from '../middleware/signToken.js'

// EXPRESS ROUTER
    const router = require('express').Router();

// - GET - //
    // V2 // no middleware
        router.get('/', async(req,res) => {
        console.log('TOKEN ROUTE')
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
            // If Conditional
                if (token) {
                    res.status(200).json( token )
                } else {
                    res.status(500).json( { error: 'Unable to return token'} )
                }
        })
    // V1 -- sign jwt middleware
        // router.get('/', sign_JWT, async(req,res) => {
        // console.log('Token Route')
        // console.log(req)
        // console.log(req.token)
        //     // -- //
        //     res.status(200).json( req.token )
        // })

// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router

// IMPORTS
    import sign_JWT from '../middleware/signToken.js'

// EXPRESS ROUTER
    const router = require('express').Router()

// - GET - //
    router.get('/', sign_JWT, async(req,res) => {
    console.log('Token Route')
    console.log(req)
    console.log(req.token)
        // -- //
        res.status(200).json( req.token )
    })

// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
    module.exports = router

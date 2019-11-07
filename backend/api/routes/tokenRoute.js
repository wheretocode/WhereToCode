// IMPORTS
const JWT = require("jsonwebtoken");
// import sign_JWT from '../middleware/signToken.js'

// EXPRESS ROUTER
const router = require("express").Router();

// - GET - //
// V2 // no middleware
router.get("/", async (req, res) => {
  // -- //
  // Secret
  const secret = process.env.JWT_Secret;
  // Options
  const options = {
    expiresIn: "1d"
  };
  // Sign Token
  const token = JWT.sign(req.body, secret, options);
  // If Conditional
  if (token) {
    res.status(200).json(token);
  } else {
    res.status(500).json({ error: "Unable to return token" });
  }
});

// - POST - //
// - PUT - //
// - DEL - //

// EXPORTS
module.exports = router;

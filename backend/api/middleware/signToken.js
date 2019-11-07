// IMPORTS
const JWT = require("jsonwebtoken");

// FUNCTION
const sign_JWT = (req, res, next) => {
  // -- //
  // Secret
  const secret = process.env.JWT_Secret;
  // Options
  const options = {
    expiresIn: "1d"
  };
  // Sign Token
  const token = JWT.sign(req.body, secret, options);
  // Next Middleware
  if (token) {
    // res.token = token
    req.token = token;
    next();
  } else {
    res.status(500).json({ error: "unable to sign token" });
    // req.status(500).json( { error: 'unable to sign token'} )
  }
};
module.exports = sign_JWT;

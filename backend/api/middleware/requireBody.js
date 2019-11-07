// Require Body
function requireBody(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    next();
  } else {
    res.status(500).json({ message: "Please include request body" });
  }
}

module.exports = requireBody;

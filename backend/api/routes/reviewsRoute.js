// IMPORTS
const REVIEW_MODEL = require("../models/ReviewModel.js");

// EXPRESS ROUTER
const router = require("express").Router();

// @route GET reviews/
// @desc Gets all the reviews in the database
// @access Public
router.get("/", async (req, res) => {
  try {
    let result = await REVIEW_MODEL.getAll_reviews();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching reviews." });
  }
});

// @route POST reviews/
// @desc Adds a new review
// @access currently Public, needs to be protected
router.post("/", requireBody, async (req, res) => {
  let review = req.body;
  try {
    const addedReview = await REVIEW_MODEL.add(review);
    return res.status(201).json({message: "New review added", addedReview})
  } catch (err) {
    return res.status(500).json(err.message)
  }
})

// @route PUT reviews/
// @desc Edits a review
// @access currently Public, needs to be protected
router.put("/:id", requireBody, async (req, res) => {
  try {
    const updated = await REVIEW_MODEL.update(req.params.id, req.body);
    return res.status(200).json({message: "Review updated", updated})
  } catch (err) {
    return res.status(500).json(err.message)
  }
})

// @route DELETE reviews/:id
// @desc Deletes a review
// Will be adding ID validation middleware
// @access currently Public, needs to be protected
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await REVIEW_MODEL.remove(req.params.id)
    return res.status(200).json({message: "Successful delete", deleted})
  } catch (err) {
    res.status(500).json(err.message)
  }
})

function requireBody(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    next();
  } else {
    next({ message: "Please include request body" });
  }
}

// EXPORTS
module.exports = router;

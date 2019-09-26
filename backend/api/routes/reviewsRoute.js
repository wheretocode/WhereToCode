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


router.get("/:id", async (req, res) => {
  try {

    const review = await REVIEW_MODEL.getReviewById(req.params.id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review is not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching review.", err });
  }
});

router.get("/:id/user", async (req, res) => {
  try {
    const reviewUser = await REVIEW_MODEL.getReviewsByUser(req.params.id)
    if (reviewUser) {
      res.status(200).json(reviewUser);
    } else {
      res.status(400).send({ message: "User for this review is not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching review user", err });
  }
});

router.get("/:id/location", async (req, res) => {
  try {
    const reviewLocation = await REVIEW_MODEL.getReviewsByLocation(req.params.id)
    if (reviewLocation) {
      res.status(200).json(reviewLocation);
    } else {
      res.status(400).send({ message: "Location from this review is not found" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching location", err });
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
router.put("/:id", requireBody, validateId, async (req, res) => {
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
router.delete("/:id", validateId, async (req, res) => {
  try {
    const deleted = await REVIEW_MODEL.remove(req.params.id)
    return res.status(200).json({message: "Successful delete", deleted})
  } catch (err) {
    res.status(500).json(err.message)
  }
})


// Middleware - checks that there is a request body
function requireBody(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    next();
  } else {
    res.status(500).json({message: "Please include request body"});
  }
}

// Middleware - Checks that there is an entry with the given ID
async function validateId(req, res, next) {
  try {
    const { id } = req.params;
    const review = await REVIEW_MODEL.getReviewById(id);
    if (review) {
      next();
    } else {
      res.status(404).json({message: "No review with that ID" })
    }
  } catch (err) {
    res.status(500).json(err.message);
  }
}

// EXPORTS
module.exports = router;

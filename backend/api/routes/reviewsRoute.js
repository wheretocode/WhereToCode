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


// EXPORTS
module.exports = router;

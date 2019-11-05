// IMPORTS
const REVIEW_MODEL = require("../models/ReviewModel.js");

// EXPRESS ROUTER
const router = require("express").Router();



// @route GET reviews/
// @desc Gets all the reviews in the database
// @access Public
router.get("/", async (req, res) => {
  try {
    let result = await REVIEW_MODEL.getAll_reviewsWithUser();
    return res.status(200).json(result);
  } catch (err) {
    return res.status(500).json({ message: "Error fetching reviews." });
  }
});


// @route GET reviews/:id
// @desc Gets the review by ID
// @access Public
router.get("/:id", async (req, res) => {
  try {

    const review = await REVIEW_MODEL.getReviewById(req.params.id);
    if (review.length > 0) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ message: "Review is not found", error });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching review.", err });
  }
});


// @route GET reviews/:id/user
// @desc Gets all reviews for Location ID by Users
// @access currently Public, needs to be protected

router.get("/:id/user", async (req, res) => {
  try {

    const reviewUser = await REVIEW_MODEL.getReviewsByUser(req.params.id)
    console.log("user", reviewUser);
    if (reviewUser) {

      res.status(200).json(reviewUser);
    } else {
      res.status(400).send({ message: "User for this review is not found", error });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching review user", err });
  }
});



// @route Get reviews/:id/location
// @desc Gets all reviews for location ID
// @access currently Public, needs to be protected

router.get("/:id/location", async (req, res) => {
  try {
    const reviewLocation = await REVIEW_MODEL.getReviewsByLocation(req.params.id)
    console.log("rl", reviewLocation);
    if (reviewLocation.length == 0) {
      res.status(404).send({ message: "Location from this review is not found" });

    } else {
      res.status(200).json(reviewLocation);
      console.log("RL", reviewLocation);
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching location", err });
  }
});

// @route Get reviews/:id/location/:userid
// @desc Gets all reviews for location ID
// @access currently Public, needs to be protected

router.get("/:id/location/:userid", async (req, res) => {
  try {
    let { id, userid } = req.params;
    const reviewLocation = await REVIEW_MODEL.getReviewsByLocationUser(id, userid)
    console.log("rl", reviewLocation);
    if (reviewLocation.length > 0) {
      res.status(200).json(reviewLocation);
      console.log("RL", reviewLocation);
    } else if (reviewLocation.length == 0) {
      console.log("rl.length =0", reviewLocation)
      res.status(400).send({ message: "Location from this review is not found", error });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching location", err });
  }
});


// @route Get reviews/:id/feature
// @desc Gets first highest rated review
// @access currently Public, needs to be protected
router.get("/:id/feature", async (req, res) => {
  try {
    const featureReview = await REVIEW_MODEL.firstHighestRating(req.params.id)
    console.log("featReview", featureReview);
    console.log("featReviewLength", Object.keys(featureReview).length);
    if (Object.keys(featureReview).length > 0) {
      res.status(200).json(featureReview);
      console.log("after json", featureReview);
      console.log("after json length", Object.keys(featureReview).length);
    } else {
      res.status(404).send({ message: "Location from this review is not found", error });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching Review. Location May Not Have A Review. " });
  }
});



// @route Get reviews/:id/first
// @desc Gets first posted review
// @access currently Public, needs to be protected
router.get("/:id/first", async (req, res) => {
  try {
    const featureReview = await REVIEW_MODEL.getFirstReviewByLocation(req.params.id)
    console.log("rl", featureReview);
    console.log("length", Object.keys(featureReview).length);
    if (Object.keys(featureReview).length > 0) {
      res.status(200).json(featureReview);
      console.log("RL", featureReview);
    } else {
      res.status(400).send({ message: "Location from this review is not found", error });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching location" });
  }
});




// @route POST reviews/
// @desc Adds a new review
// @access currently Public, needs to be protected
router.post("/", requireBody, async (req, res) => {
  let review = req.body;
  try {
    const addedReview = await REVIEW_MODEL.add(review);
    return res.status(201).json({ message: "New review added", addedReview })
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
    return res.status(200).json({ message: "Review updated", updated })
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
    return res.status(200).json({ message: "Successful delete", deleted })
  } catch (err) {
    res.status(500).json(err.message)
  }
})


// Middleware - checks that there is a request body
function requireBody(req, res, next) {
  if (req.body && Object.keys(req.body).length) {
    next();
  } else {
    res.status(500).json({ message: "Please include request body" });
  }
}



// EXPORTS
module.exports = router;

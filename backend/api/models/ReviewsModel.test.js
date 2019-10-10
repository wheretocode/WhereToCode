const REVIEWS_MODEL = require("./ReviewModel");
const LOCATION_MODEL = require("./LocationsModel");
const USER_MODEL = require("./UsersModel");
const db = require("../../config/knexConfig");
const server = require("../../api/server");
const request = require("supertest");
// Removes all entries and re-adds test reviews

const test_reviews = [
  {
    rating: 2,
    comment: "average at best",
    internet_rating: 2,
    upload_speed: 4,
    download_speed: 7.1,
    secure_wifi: false,
    user_id: 2,
    location_id: 2
  },
  {
    rating: 1,
    comment: "no comment",
    internet_rating: 1,
    upload_speed: 1,
    download_speed: 2,
    secure_wifi: false,
    user_id: 2,
    location_id: 2
  }
];

const singleReview = {
  rating: 1,
  comment: "meh",
  internet_rating: 2,
  upload_speed: 3,
  download_speed: 4,
  secure_wifi: false,
  user_id: 1,
  location_id: 1
};

const updatedInfo = {
  comment: "It was better this time",
  internet_rating: 3
};

describe("REVIEWS MODEL", () => {
  describe("getAll_reviews()", () => {
    it("should return a list of all reviews", async () => {
      const reviews = await REVIEWS_MODEL.getAll_reviews();

      expect(reviews.length).toBe(2);
      expect(reviews[0].internet_rating).toBe(2);
      expect(reviews[1].comment).toBe("no comment");
    });
  });
  describe("add(review)", () => {
    it("should add a new review", async () => {
      const newReview = await REVIEWS_MODEL.add(singleReview);
      const reviews = await REVIEWS_MODEL.getAll_reviews();

      expect(reviews.length).toBe(3);
      expect(reviews[2].comment).toBe("meh");
    });
    it("should return the newly added review", async () => {
      const newReview = await REVIEWS_MODEL.add(singleReview);

      expect(newReview).toEqual(singleReview);
    });
  });
  describe("remove(id)", () => {
    it("should delete the review with the listed ID", async () => {
      const deleted = await REVIEWS_MODEL.remove(2);
      const reviews = await REVIEWS_MODEL.getAll_reviews();

      expect(reviews.length).toBe(1);
      expect(reviews[1]).toBe(undefined);
      expect(reviews[0].comment).toBe("average at best");
    });
  });
  describe("update(id, update)", () => {
    it("should update the review with the listed ID to include the new information being passed in", async () => {
      const updated = await REVIEWS_MODEL.update(2, updatedInfo);
      const reviews = await REVIEWS_MODEL.getAll_reviews();

      expect(reviews.length).toBe(2);
      expect(reviews[0].internet_rating).toBe(2);
      expect(reviews[1].internet_rating).toBe(3);
      expect(reviews[1].comment).toBe("It was better this time");
      expect(reviews[1].user_id).toBe(2);
    });
  });
});

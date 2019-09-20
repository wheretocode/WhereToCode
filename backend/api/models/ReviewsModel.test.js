const REVIEWS_MODEL = require("./ReviewModel");
const db = require("../../config/knexConfig");

// Removes all entries and re-adds test reviews
const initialize = async () => {
  await db("reviews").truncate();
  await db("reviews").insert(test_reviews);
};

beforeEach(() => {
  return initialize();
});

const test_reviews = [
  {
    rating: 2,
    comments: "average at best",
    internet_rating: 2,
    upload_speed: 4,
    download_speed: 7.1,
    secure_wifi: false,
    user_id: 2,
    location_id: 2
  },
  {
    rating: 1,
    comments: "no comment",
    internet_rating: 1,
    upload_speed: 1,
    download_speed: 2,
    secure_wifi: false,
    user_id: 2,
    location_id: 4
  }
];

describe('REVIEWS MODEL', () => {
    describe('getAll_reviews()', () => {
        it('should return a list of all reviews', async () => {
            const reviews = await REVIEWS_MODEL.getAll_reviews();

            expect(reviews.length).toBe(2);
            expect(reviews[0].internet_rating).toBe(2);
            expect(reviews[1].comments).toBe('no comment')
        })
    })
})
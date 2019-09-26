const request = require("supertest");
const server = require("../server");
const db = require("../../config/knexConfig");
const REVIEW_MODEL = require("../models/ReviewModel");

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

const singleReview = {
  rating: 1,
  comments: "meh",
  internet_rating: 2,
  upload_speed: 3,
  download_speed: 4,
  secure_wifi: false,
  user_id: 2,
  location_id: 1
};

const updatedInfo = {
  comments: "It was better this time",
  internet_rating: 3
};

const initialize = async () => {
    await db('reviews').truncate()
    await db('reviews').insert(test_reviews)
}

beforeEach(() => {
    return initialize();
})

describe('REVIEWS ROUTE', () => {
        describe('GET', () => {
            it('should return all of the reviews in the database as a json with a status 200', async () => {
                const res = await request(server).get('/reviews')

                expect(res.body.length).toBe(2);
                expect(res.type).toBe('application/json');
                expect(res.status).toBe(200);
            })
        })
        describe('POST', () => {
            it('should return an error when there is no request body', async () => {
                const res = await request(server).post('/reviews').send({})

                expect(res.body.message).toBe('Please include request body')
            })
            it('should post a new review to the database and return the review', async () => {
                const newReview = await request(server).post('/reviews').send(singleReview)
                const res = await request(server).get('/reviews')
            
                expect(res.body.length).toBe(3);
                expect(newPost.status).toBe(201)
                expect(newPost.body.message).toBe('New review added')
                expect(newPost.body.addedReview.comments).toBe(singleReview.comments)
            })
        })
        describe('UPDATE', () => {
            it('should return an error when there is no review with the requested id', async () => {
                const update = await request(server).put('/reviews/5').send(updatedInfo)

                expect(update.body.message).toBe('No review with that ID')
            })
        })
    
})
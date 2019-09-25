const REVIEWS_MODEL = require("./ReviewModel");
const db = require("../../config/knexConfig");

// Removes all entries and re-adds test reviews
const initialize = async () => {

  await db("reviews").truncate();

  await db("reviews").insert(test_reviews);

};



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
    location_id: 2
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
}

const test_Users = [{

  firebase_user_id: "YXRkpmEwMBhcuuU7rFth48ivrI4u872",
  userName: "Levi1_userName",
  email: "test4@email.com",
  reviewCount: 0
},
{
  firebase_user_id: "YXRkpmEwMBhcU7rFth48ivrI4u872",
  userName: "Levi5_userName",
  email: "test5@email.com",
  reviewCount: 0
}
]

const test_Locations = [
  {
    locationName: "testLocation_5",
    locationGoogleId: "jkjhy65rtfdsew345tyhu2qwsdfd22222"
  },
  {
    locationName: "testLocation_4",
    locationGoogleId: "jkjhy65rtfdsew345tyhu2qwsdfd22322"
  }
]

describe('REVIEWS MODEL', () => {
  describe('getAll_reviews()', () => {
    beforeEach(async () => {
      return initialize();
    });
    it('should return a list of all reviews', async () => {
      const reviews = await REVIEWS_MODEL.getAll_reviews();

      expect(reviews.length).toBe(2);
      expect(reviews[0].internet_rating).toBe(2);
      expect(reviews[1].comments).toBe('no comment')
    })
  })

  describe('getReviewById()', () => {
    beforeEach(async () => {


      return initialize();
    });
    it('should return review by ID', async () => {

      const reviews1 = await REVIEWS_MODEL.getReviewById(1);


      expect(reviews1[0].internet_rating).toBe(2);
      expect(reviews1[0].user_id).toBe(2);

    })
  })


  describe('getReviewsByUser()', () => {
    beforeEach(async () => {

      await db("reviews").truncate();
      await db("users").truncate();
      await db("reviews").insert(test_reviews);
      await db("users").insert(test_Users);
      await db("locations").insert(test_Locations);
    });
    it('should return the user for each review', async () => {
      const reviews1 = await REVIEWS_MODEL.getReviewsByUser(1);



      expect(reviews1.userName).toBe("Levi5_userName");


    })
  })

  describe('getReviewsByLocation()', () => {
    beforeEach(async () => {

      await db("reviews").truncate();



      await db("locations").insert(test_Locations);
      await db("reviews").insert(test_reviews);
      await db("users").insert(test_Users);
      await db("locations").insert(test_Locations);
    });
    it('should return the location for each review', async () => {

      const reviews1 = await REVIEWS_MODEL.getReviewsByLocation(1);



      expect(reviews1.LocationName).toBe("testLocation_4");


    })
  })

  describe('add(review)', () => {
    beforeEach(async () => {


      return initialize();
    });
    it('should add a new review', async () => {
      const newReview = await REVIEWS_MODEL.add(singleReview)
      const reviews = await REVIEWS_MODEL.getAll_reviews();

      expect(reviews.length).toBe(3);
      expect(reviews[2].comments).toBe("meh");
    })
    it('should return the newly added review', async () => {
      const newReview = await REVIEWS_MODEL.add(singleReview)

      expect(newReview).toEqual(singleReview);
    })
  })
  // describe('remove(id)', () => {
  //   beforeEach(async () => {


  //     return initialize();
  //   });
  //   it('should delete the review with the listed ID', async () => {
  //     const deleted = await REVIEWS_MODEL.remove(2);
  //     const reviews = await REVIEWS_MODEL.getAll_reviews();

  //     expect(reviews.length).toBe(1);
  //     expect(reviews[1]).toBe(undefined);
  //     expect(reviews[0].comments).toBe('average at best')
  //   })
  // })
})
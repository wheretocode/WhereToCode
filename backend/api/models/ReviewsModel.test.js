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
  user_id: 1,
  location_id: 1
}

const singleReview1 = {
  rating: 2,
  comments: "no comment",
  internet_rating: 1,
  upload_speed: 1,
  download_speed: 2,
  secure_wifi: false,
  user_id: 2,
  location_id: 2
}


const singleUser = {
  firebase_user_id: "YXRkpmEwMBhcuuU7rFth48ivrI4u872",
  userName: "Levi7_userName",
  email: "test4@email.com",
  reviewCount: 0
}
// {
//   firebase_user_id: "YXRkpmEwMBhcU7rFth48ivrI4u872",
//     userName: "Levi5_userName",
//       email: "test5@email.com",
//         reviewCount: 0
// }
// ]

const singleLocation = {
  locationName: "testLocation_5",
  locationGoogleId: "jkjhy65rt"
}

const test_Locations = [
  {
    locationName: "testLocation_5",
    locationGoogleId: "jkjhy65rtfdsew345tyhu2d22222"
  },
  {
    locationName: "testLocation_4",
    locationGoogleId: "jkjhy65rtfdsew345tyhwsdfd22322"
  }
]



describe('GET/ REVIEWS ROUTE', () => {
  beforeEach(async () => {

    await db("reviews").truncate();

  });

  it('should return a list of all reviews', async () => {


    await REVIEWS_MODEL.add(singleReview)



    const reviews = await REVIEWS_MODEL.getAll_reviews();

    expect(reviews.length).toBe(1);

    expect(reviews[0].internet_rating).toBe(2);
    expect(reviews[0].comments).toBe('meh')
  })
  it('should return', async () => {
    const newReview = await REVIEWS_MODEL.add(singleReview)

    expect(newReview).toEqual(singleReview);
  })

})


describe('Get/:id REVIEWS ROUTE', () => {
  beforeEach(async () => {
    await db("reviews").truncate();

  });

  it('should return review by ID', async () => {

    await REVIEWS_MODEL.add(singleReview)

    const reviews1 = await REVIEWS_MODEL.getReviewById(1);


    expect(reviews1[0].internet_rating).toBe(2);
    expect(reviews1[0].user_id).toBe(1);

  })
})



describe('get user for review', () => {
  beforeEach(async () => {
    await db("reviews").truncate();


  });

  it('should return the user for each review', async () => {

    await REVIEWS_MODEL.add(singleReview)


    const reviews1 = await REVIEWS_MODEL.getReviewsByUser(1);



    expect(reviews1[0].userName).toBe("Ronny_userName");
    expect(reviews1[0].id).toBe(1);



  })
})



describe('getReviewsByLocation()', () => {
  beforeEach(async () => {
    await db("reviews").truncate();

    // await db("locations").truncate();




  });

  it('should return the location for each review', async () => {
    await REVIEWS_MODEL.add(singleReview)
    // await LOCATION_MODEL.add(singleLocation)
    // await USER_MODEL.add(singleUser)
    const reviews1 = await REVIEWS_MODEL.getReviewsByLocation(1);




    expect(reviews1[0].locationName).toBe("testLocation_1");
    expect(reviews1[0].id).toBe(1);

  })
})





describe('add(review)', () => {
  beforeEach(async () => {

    await db("reviews").truncate();

  });

  it('should add a new review', async () => {
    await REVIEWS_MODEL.add(singleReview)
    const reviews = await REVIEWS_MODEL.getAll_reviews();

    expect(reviews.length).toBe(1);
    expect(reviews[0].comments).toBe("meh");
  })

  it('should return the newly added review', async () => {
    const newReview = await REVIEWS_MODEL.add(singleReview)

    expect(newReview).toEqual(singleReview);
  })
})

describe('remove(id)', () => {
  beforeEach(async () => {

    await db("reviews").truncate();
  });
  it('should delete the review with the listed ID', async () => {
    await db("reviews").insert(test_reviews);
    const deleted = await REVIEWS_MODEL.remove(1);
    const reviews = await REVIEWS_MODEL.getAll_reviews();

    expect(reviews.length).toBe(1);
    expect(reviews[1]).toBe(undefined);
    expect(reviews[0].comments).toBe('no comment')
  })
})

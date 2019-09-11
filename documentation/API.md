## API Documentation

### How to use this API locally or deployed:

To run locally: use `npm start` or `yarn start`. The server will run on port 8080 by default. If you have a `.env` file, it will run on the port of your choosing from `process.env.PORT`.

Link to the HiveStack API: `https://wheretocode-master.herokuapp.com/`

### Auth Routes

| Method | Endpoint          | Access Control | Description                      |
| ------ | ----------------- | -------------- | -------------------------------- |
| GET    | `/auth/`          | all users      | Returns all authenticated users  |
| POST   | `/auth/register/` | all users      | Creates a new authenticated user |

### Network Routes

| Method | Endpoint       | Access Control | Description                               |
| ------ | -------------- | -------------- | ----------------------------------------- |
| GET    | `/api/network` | all users      | Returns network upload and download speed |

### Endpoints

#### Register & Login (in progress)

##### Register

`POST` to `/auth/register`. The structure of this request is as followed:

```
{
    "id": 1,
    "firebase_user_id": "somestring",
    "email": "myemail@email.com",
    "reviewCount": 0,
    "created_at": 2019-09-05 21:11:34.729873-05,
    "updated_at": 2019-09-05 21:11:34.729873-05
}
```

The response will return the added user's information. This will change at a later date to include the user's id and generate a token.

##### Login

Coming soon.

#### User Routes (in progress)

##### View all users in the database

`GET` to `/users`

##### View a specific user

`GET` to `/users/:userid`

#### Reviews Routes (in progress)

##### View all reviews in the database

`GET` to `/reviews`

#### Add a review to the database (coming soon)

`POST` to `/reviews`. The structure of this is as followed:

```
{
    "id": 1,
    "rating": 3,
    "comments": "Place has great wifi",
    "user_id": 1,
    "location_id": 2
}
```

#### Locations Routes (in progress)

##### View all locations in the database

`GET` to `/locations`

##### Add a location to the database

`POST` to `/locations`. The structure of this is as followed:

```
{
    "id": 1,
    "locationName": "Starbucks Coffee",
    "locationGoogleId": "xyzabc123456"
}
```

const request = require("supertest");
const server = require("../api/server.js");

const db = require("../config/knexConfig.js");
const Classes = require("../api/models/ReviewModel.js");

describe("GET /reviews", () => {
    // cleanup for db
    afterEach(async () => {
        await db("reviews").truncate();
        await db("users").truncate();
        await db("locations").truncate();
    });

    it("should return 401 to unauthorized user", async () => {
        const res = await request(server).get("/reviews");

        expect(res.status).toBe(401);
    });

    it("should return 200 to authorized user", async () => {
        let res = await request(server)
            .post("/reviews")
            .send({
                id: "1",
                firebase_user_id: "lkad09349u",
                username: "Msmith9",
                email: "smith5w@gmail.com",
            });

        let token = res.body.token;

        const res2 = await request(server)
            .get("/reviews")
            .set("authorization", `${token}`);

        expect(res2.status).toBe(200);
    });


})
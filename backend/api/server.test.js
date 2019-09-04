const server = require("./server.js");
const request = require("supertest");

describe("SERVER", () => {
    describe("Environment", () => {

        it('should set the testing environment', () => {
            const env = process.env.DB_CONNECT;

            expect(env).toBe("testing");
        });

    });

    describe("GET /", () => {

        it('should return status 200', async () => {
            const res = await request(server).get("/");

            expect(res.status).toBe(200);
        });

        it('should return a JSON package', async () => {
            const res = await request(server).get("/");

            expect(res.type).toBe('application/json');
        });

        it('should return the message \"WhereToCode Server Is Working\"', async () => {
            const res = await request(server).get("/");

            expect(res.body).toEqual({ message: "WhereToCode Server Is Working" });
        });
    });
});
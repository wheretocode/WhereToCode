const request = require('supertest');
const server = require('../../server');

describe("NETWORK ROUTES", () => {
    describe("GET /", () => {

        it('should return an object', async () => {
            jest.setTimeout(30000);

            const res = await request(server).get('/api/network');

            expect(typeof res.body).toBe('object');
        });


        it.only('should have the following shape { download, upload, originalDownload, originalUpload }', async () => {
            jest.setTimeout(30000);

            const res = await request(server).get('/api/network');

            const keys = Object.keys(res.body);

            expect(keys).toEqual([
                                'download',
                                'upload',
                                'originalDownload',
                                'originalUpload'
                             ]);
        });
    });
});
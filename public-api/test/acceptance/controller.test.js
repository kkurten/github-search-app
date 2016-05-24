const request = require('supertest'),
    sinon = require('sinon'),
    proxyquire = require('proxyquire'),
    server = require('../support/server'),
    jsonfile = require('jsonfile');

const mockServiceRepositories = jsonfile.readFileSync(__dirname + '/../fixtures/github-repositories-api-response.json');
const expectedSearchApiResponse = jsonfile.readFileSync(__dirname + '/../fixtures/search-api-response.json');

describe('/api/v1/search/repository', () => {
    let app, searchStub;
    beforeEach((done) => {
        searchStub = sinon.stub();
        searchStub.withArgs({query: "valid"}).returns(Promise.resolve(mockServiceRepositories));
        searchStub.withArgs({query: "invalid"}).returns(Promise.reject('mock failure'));
        const serviceMock = {
            search: searchStub
        };
        proxyquire('api/search/repository/controller', {'./service': serviceMock});

        app = server.express();
        server.beforeEach(app, () => {
            done();
        });
    });

    describe('valid search query', () => {
        it('returns 200 with repositories', (done) => {
            request(app)
                .post('/api/v1/search/repositories')
                .send({query: "valid"})
                .expect(200, expectedSearchApiResponse, done);
        });
    });
    describe('search query fails', () => {
        it('returns 500', (done) => {
            request(app)
                .post('/api/v1/search/repositories')
                .send({query: "invalid"})
                .expect(500, done);
        });
    });
});

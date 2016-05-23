const request = require('supertest'),
    sinon = require('sinon'),
    proxyquire = require('proxyquire'),
    server = require('../support/server');

const repositories =
{
    "total_count": 3,
    "items": [
        {
            "name": "Repo 1",
            "html_url": "URL 1",
            "owner": {
                "login": "Owner 1"
            },
            "stargazers_count": 10
        },
        {
            "name": "Repo 2",
            "html_url": "URL 2",
            "owner": {
                "login": "Owner 2"
            },
            "stargazers_count": 50
        },
        {
            "name": "Repo 3",
            "html_url": "URL 3",
            "owner": {
                "login": "Owner 3"
            },
            "stargazers_count": 20
        }
    ]
};

describe('/api/v1', () => {
    let app, searchStub;
    beforeEach((done) => {
        searchStub = sinon.stub();
        searchStub.withArgs({query: "valid"}).returns(Promise.resolve(repositories));
        searchStub.withArgs({query: "invalid"}).returns(Promise.reject());
        const serviceMock = {
            search: searchStub
        };
        proxyquire('api/search/repository/controller', {'./service': serviceMock});

        app = server.express();
        server.beforeEach(app, () => {
            done();
        });
    });

    describe('/search/repository', () => {
        describe('valid search query', () => {
            it('returns 200 with repositories', (done) => {
                request(app)
                    .post('/api/v1/search/repositories')
                    .send({query: "valid"})
                    .expect(200, done);
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
});

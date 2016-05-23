const request = require('supertest');
const proxyquire = require('proxyquire');
const server = require('../support/server');

const repositories = [
    {
        "total_count": 3,
        "items": [
            {
                "id": 1,
                "full_name": "Repo 1"
            },
            {
                "id": 2,
                "full_name": "Repo 2"
            },
            {
                "id": 3,
                "full_name": "Repo 3"
            }
        ]
    }
];
const serviceMock = {};

const controller = proxyquire('api/search/repository/controller', {'./service': serviceMock});

describe('/api/v1', () => {
    var app;
    beforeEach((done) => {
        app = server.express();
        server.beforeEach(app, () => {
            done();
        });
    });

    describe('/search/repository', () => {
        describe('valid search query', () => {
            serviceMock.search = (params) => {
                return Promise.resolve(repositories);
            };

            it('returns 200 with repositories', () => {
                request(app)
                    .post('/api/search/repositories')
                    .send({query: "test"})
                    .expect(200, repositories);
            });
        });
        describe('search query fails', () => {
            serviceMock.search = (params) => {
                return Promise.reject();
            };

            it('returns 500', () => {
                request(app)
                    .post('/api/v1/search/repositories')
                    .send({query: "test"})
                    .expect(500);
            });
        });
    });
});

const chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    proxyquire = require('proxyquire'),
    jsonfile = require('jsonfile');

chai.should();
chai.use(sinonChai);

const apiOptions = {
    headers: {'User-Agent': 'NodeJS Request-Promise'},
    json: true
};
const mockRepositories = jsonfile.readFileSync(__dirname + '/../fixtures/github-repositories-api-response.json');

describe('GitHub Search service', () => {
    let sandbox, rpStub, service;
    beforeEach(() => {
        sandbox = sinon.sandbox.create();

        rpStub = sandbox.stub();
        rpStub.onFirstCall().returns(Promise.resolve(mockRepositories));

        service = proxyquire('api/search/repository/service', {'request-promise': rpStub});
    });
    afterEach(() => {
        sandbox.restore();
    });

    describe('search by name', () => {
        it('should return correct repositories', () => {
            const searchParams = {query: "tetris"};
            Object.assign(apiOptions, {uri: `https://api.github.com/search/repositories?q=${searchParams.query}&sort=stars&order=desc`});

            return service.search(searchParams).then((res) => {
                rpStub.should.have.been.calledWith(apiOptions);
                res.should.eql(mockRepositories);
            });
        });
    });
});

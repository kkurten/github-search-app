/*
const chai = require('chai'),
    sinon = require('sinon'),
    sinonChai = require('sinon-chai'),
    proxyquire = require('proxyquire');

chai.should();
chai.use(sinonChai);

describe('GitHub Search service', () => {
 const apiOptions = {
 headers: {'User-Agent': 'NodeJS Request-Promise'},
 json: true
 };
 const mockRepositories = [
 {
 "id": 1,
 "name": "Repo 111"
 },
 {
 "id": 2,
 "name": "Repo 222"
 }
 ];

 const rpStub = sinon.stub();
    rpStub.onFirstCall().returns(Promise.resolve(mockRepositories));
    const service = proxyquire('api/search/repository/service', {'request-promise': rpStub});

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
 */

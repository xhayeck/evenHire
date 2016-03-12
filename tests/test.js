var expect = require('chai').expect;
var request = require('supertest');
var app = require('../index.js');
var api = request('http://localhost:8000');

describe("1+2=3", function() {
  it("can pass a given test", function() {
    expect(1+2).to.equal(3);
  });
});

describe('Routing', function() {
  describe('General routes', function() {
    it('GET / should return 200', function(done) {
      request(app)
        .get('/')
        // .expect('Content-Type', 'text/html; charset=UTF-8')
        .expect(200, done);
    });
  });
  describe('Applicant routes', function() {
    it('GET /api/applicants/allJobs should return 200', function(done) {
      request(app)
        .get("/api/applicants/allJobs")
        .expect(200, done);
    });
    it('GET /api/applicants/allJobs should return 200', function(done) {
      request(app)
        .get("/api/applicants/allJobs")
        .expect(200, done);
    });
    describe('Applicant login', function() {
      it('POST /api/applicants/login should return an object with type and data', function(done) {
        request(app)
          .post("/api/applicants/login")
          .end(function(err, res) {
            expect(res.body).to.have.property("type");
            expect(res.body).to.have.property("data");
            expect(res.body.type).to.be.false;
            done();
          });
      });
      it('Should return a user object, token and true when logging in', function(done) {
        var data = {
          username: 'test',
          password: 'test'
        };
        request(app)
          .post("/api/applicants/login")
          .send(data)
          .expect(200)
          .end(function(err, res) {
            expect(res.body.data).to.have.property("first_name");
            expect(res.body.data).to.have.property("id");
            expect(res.body.token).to.have.length.above(20);
            expect(res.body.token).to.be.a("string");
            expect(res.body).to.have.property("token");
            expect(res.body.type).to.be.true;
            done();
          });
      });
      it('Should return false when logging in with a wrong password', function(done) {
        var data = {
          username: 'test',
          password: 'notTest'
        };
        request(app)
          .post("/api/applicants/login")
          .send(data)
          .end(function(err, res) {
            expect(res.body).to.have.property("type");
            expect(res.body.data).to.have.string("Wrong password");
            expect(res.body.type).to.be.false;
            expect(res.body).to.not.have.property("token");
            done();
          });
      });
    });
    describe('Signing up', function() {
      it('POST /api/applicants/signup should return an object with type and data', function(done) {
        var data = {
          firstName: "test",
          username: "testing"
        };
        request(app)
          .post("/api/applicants/signup")
          .send(data)
          .end(function(err, res) {
            expect(res.body).to.have.property("type");
            expect(res.body).to.have.property("alce");
            expect(res.body).to.have.property("data");
            expect(res.body.type).to.be.false;
            done();
          });
      });
    });
    it('POST /api/applicants/apply should return an object', function(done) {
      request(app)
        .post("/api/applicants/apply")
        .end(function(err, res) {
          expect(res.body).to.exist;
          // expect(res.body).to.have.property("data");
          done();
        });
    });
  });
  describe('Recruiter routes', function() {
    it('GET /api/recruiters/showJobsAppsDB should return 200', function(done) {
      request(app)
        .get("/api/recruiters/showJobsAppsDB")
        .expect(200, done());
    });
    it('POST /api/recruiters/login should return an object with data and type', function(done) {
      request(app)
        .post("/api/recruiters/login")
        .end(function(err, res) {
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('type');
          expect(res.body.type).to.be.false;
          done();
        });
    });
    it('POST /api/recruiters/signup should return an object with data and type', function(done) {
      request(app)
        .post("/api/recruiters/signup")
        .end(function(err, res) {
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('type');
          expect(res.body.type).to.be.false;
          done();
        });
    });
    it('POST /api/recruiters/newJob should return an object', function(done) {
      request(app)
        .post("/api/recruiters/newJob")
        // .set(req.headers['x-access-token'])
        // .expect(200)
        .end(function(err, res) {
          // expect(res.status).to.be(500);
          expect(res.body).to.exist;
          done();
        });
    });
  });
});

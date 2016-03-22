var expect = require('chai').expect;
var request = require('supertest');
var app = require('../../index.js');
// var api = request('http://localhost:8000');
var testApplicantToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDYsInVzZXJUeXBlIjoiQXBwbGljYW50In0.v_UCG-HE2hpbnYxpU89rYpyfBeihmxqqyC_o-qn4jq0";
var testRecruiterToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6NDUsInVzZXJUeXBlIjoiUmVjcnVpdGVyIn0.OwrYjvJM16fuRqRFX4i7YoYIvCmvzpRlWU8Db01a7y8";

//Constant test
describe('1+2=3', function() {
  it('can pass a given test', function() {
    expect(1+2).to.equal(3);
  });
});

describe('Routing', function() {
  describe('General routes', function() {
    it('GET / should return html and 200', function(done) {
      request(app)
        .get('/')
        .expect('Content-Type', 'text/html; charset=UTF-8')
        .expect(200, done);
    });
  });
  describe('Applicant routes', function() {
    it('GET /api/applicant/allJobs should return an array of jobs', function(done) {
      request(app)
        .get('/api/applicant/allJobs')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          expect(res.body).to.have.length.above(5);
          expect(res.body[0]).to.have.property('title');
          expect(res.body[0]).to.have.property('city');
          expect(res.body[0]).to.have.property('recruiterId');
          expect(res.body[0].recruiter).to.have.property('id');
          done();
        });
    });
    it('should return jobs with a recruiter object', function(done) {
      request(app)
        .get('/api/applicant/allJobs')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res) {
          expect(res.body[0]).to.have.property('recruiterId');
          expect(res.body[0].recruiter).to.be.an('object');
          expect(res.body[0].recruiter).to.have.property('id');
          expect(res.body[0].recruiter).to.have.property('email');
          done();
        });
    });
    describe('Applicant login', function() {
      it('POST /api/applicant/login should return an error with nonexistent user', function(done) {
        var user = {
          username: null,
          password: null
        };
        request(app)
          .post('/api/applicant/login')
          .send(user)
          .expect(400)
          .end(function(err, res) {
            expect(res.error).to.exist;
            expect(res.error.text).to.equal('User does not exist');
            done();
          });
      });
      it('Should return a user object, token and true when logging in with correct credentials', function(done) {
        var data = {
          username: 'test',
          password: 'password'
        };
        request(app)
          .post('/api/applicant/login')
          .send(data)
          .expect(200)
          .end(function(err, res) {
            expect(res.body).to.have.property('type');
            expect(res.body.type).to.be.true;
            expect(res.body).to.have.property('data');
            expect(res.body.data).to.have.property('username');
            expect(res.body.data.username).to.be.a('string');
            expect(res.body).to.have.property('token');
            expect(res.body.token).to.have.length.above(20);
            expect(res.body.token).to.be.a('string');
            done();
          });
      });
      it('Should return an error when logging in with a wrong password', function(done) {
        var data = {
          username: 'test',
          password: 'notTest'
        };
        request(app)
          .post('/api/applicant/login')
          .send(data)
          .expect(400)
          .end(function(err, res) {
            expect(res.error.text).to.equal('Password does not match');
            done();
          });
      });
    });
    describe('Signing up', function() {
      it('POST /api/applicant/signup should return an object with type and data', function(done) {
        var data = {
          firstName: 'test',
          username: 'testing'
        };
        request(app)
          .post('/api/applicant/signup')
          .send(data)
          .end(function(err, res) {
            expect(res.body).to.have.property('type');
            expect(res.body).to.have.property('data');
            expect(res.body.type).to.be.false;
            done();
          });
      });
    });
    describe('Applying for jobs', function() {
      it('Should not allow to apply for same job', function(done) {
        request(app)
          .post('/api/applicant/apply')
          .set('x-access-token', testApplicantToken)
          .send({job_id: 1})
          .end(function(err, res) {
            expect(res.body).to.exist;
            // expect(res.body).to.have.property('id');
            done();
          });
      });
    });
  });
  describe('Recruiter routes', function() {
    it('')
    it('GET /api/recruiter/showJobsAppsDB should return 200', function(done) {
      request(app)
        .get('/api/recruiter/showJobsAppsDB')
        .expect(200, done());
    });
    it('POST /api/recruiter/login should return an error for a nonexistent user', function(done) {
      var user = {
        username: null,
        password: null
      };
      request(app)
        .post('/api/recruiter/login')
        .send(user)
        .expect(400)
        .end(function(err, res) {
          expect(res.error).to.exist;
          expect(res.error.text).to.equal('User does not exist');
          done();
        });
    });
    it('Should return an error when logging in with a wrong password', function(done) {
      var data = {
        username: 'test',
        password: 'notTest'
      };
      request(app)
        .post('/api/recruiter/login')
        .send(data)
        .expect(400)
        .end(function(err, res) {
          expect(res.error.text).to.equal('Password does not match');
          done();
        });
    });
    it('POST /api/recruiter/signup should return an object with data and type', function(done) {
      request(app)
        .post('/api/recruiter/signup')
        .end(function(err, res) {
          expect(res.body).to.have.property('data');
          expect(res.body).to.have.property('type');
          expect(res.body.type).to.be.false;
          done();
        });
    });
    it('POST /api/recruiter/newJob should return an object', function(done) {
      request(app)
        .post('/api/recruiter/newJob')
        .set('x-access-token', testRecruiterToken)
        .expect(400)
        .end(function(err, res) {
          // expect(res.error.text).to.equal('User does not exist');
          done();
        });
    });
  });
});

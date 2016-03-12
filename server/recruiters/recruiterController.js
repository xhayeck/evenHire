//Require our database instance with its models
var db = require('../db/db').db;
var Models = require('../db/models')(db);
var authUtils = require('../auth/utils');

module.exports = {
  getAllJobs: function(req, res) {
    var decoded = authUtils.decodeToken(req.headers['x-access-token']);
    var requestorId = decoded.id;
    Models.Job.findAll({where: {recruiterId: requestorId}})
      .then(function(results) {
        return res.send(results);
      })
      .catch(function(err) {
        return res.send(err);
      });
  },

  getAllRecs: function(req, res) {
    Models.Recruiter.findAll()
      .then(function(results) {
        return res.send(results);
      })
      .catch(function(err) {
        return res.send(err);
      });
  },

  getJobAppRelations: function(req, res) {
    Models.JobApplicant.findAll()
      .then(function(results) {
        return res.send(results);
      })
      .catch(function(err) {
        return res.send(err);
      });
  },

  login: function(req, res) {
    Models.Recruiter.findOne({ where: {username: req.body.username }})
      .then(function(recruiter) {
        recruiter.verifyPassword(req.body.password, function(err, isVerified) {
          //Error in verifying
          if (err) {
            console.log('error in recruiterController');
            return res.send({
              type: false,
              data: 'Error occured: ' + err
            });
          }
          if (!(isVerified)) {
            return res.send({
              type: false,
              data: 'Wrong password'
            });
          } else {
            var token = authUtils.issueToken(recruiter.id, 'Recruiter');
            console.log("Signin successful");
            return res.send({
              type: true,
              token: token,
              data: recruiter
            });
          }
        });
      })
      .catch(function(error) {
        console.log('This user does not exist')
        return res.send({
          type: false,
          data: 'User does not exist'
        });
      });
  },


  postJob: function(req, res) {
    var decoded = authUtils.decodeToken(req.headers['x-access-token']);
    var requestorId = decoded.id;
    Models.Recruiter.findById(requestorId)
      .then(function(recruiter) {
        recruiter.createJob({
          title: req.body.title,
          location: req.body.location,
          description: req.body.description,
          industry: req.body.industry,
          career_level: req.body.career_level,
          job_type: req.body.job_type,
          experience: req.body.experience,
        })
        .then(function(newJob) {
          return res.send(newJob);
        });
      })
    .catch(function(err) {
      return res.send(err);
    });
  },

  signup: function (req, res) {
    var newUser = Models.Recruiter.build({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    })
      .setPassword(req.body.password, function(updated) {
        updated.save()
          .then(function() {
            var token = authUtils.issueToken(updated.id, 'Recruiter');
            return res.send({
              data: updated,
              type: true,
              token: token
            });
          })
          .catch(function(error) {
            return res.send({
              type: false,
              data: error
            });
          });
      });
  },

  grabbingApplicants: function(req, res) {
    Models.JobApplicant.findAll({attributes: ['applicantId'], where: {jobId: req.body.jobId}})
      .then(function(results) {
        console.log('eeeeeeeee: ', results[4].dataValues.applicantId);
        Models.Applicant.findAll({attributes: ['id', 'city', 'work_exp', 'education', 'resume'], where: {id: results[4].dataValues.applicantId}})
          .then(function(result) {
            console.log('results12: ', result);
            return res.send(result);
          })
          .catch(function(err) {
            console.log('Danger Will Robinson!');
            return res.send(err);
          });
        });
  }

};

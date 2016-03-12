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
            var token = authUtils.issueToken(recruiter.id, 'recruiter');
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
    if (!req.headers['x-access-token']) {
      return res.status(500).send('Not logged in');
    }
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
    if (!req.body.name || !req.body.username) {
      return res.send({
        type: false,
        data: null
      });
    }
    var newUser = Models.Recruiter.build({
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    })
      .setPassword(req.body.password, function(updated) {
        updated.save()
          .then(function() {
            var token = authUtils.issueToken(updated.id, 'recruiter');
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
        var mappedIDs = results.map(function(record) {
          return record.dataValues.applicantId;
        });
        var promiseMap = mappedIDs.map(function(id) {
          return Models.Applicant.find({attributes: ['id', 'city', 'work_exp', 'education', 'resume'], where: {id: id}});
        })
        return Promise.all(promiseMap);
      })
      .then(function(result) {
        return res.send(result);
      })
      .catch(function(err) {
        return res.send(err);
      });
  }

};

// [Sequelize.fn(Sequelize.col('results.dataValues.applicantId'))]

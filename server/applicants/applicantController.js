//Uses dotenv to get process.env variables
// require('dotenv').config();
// var connectStr = process.env.DATABASE_URL;
// var pg = require('pg');

var db = require('../db/db').db;
var Models = require('../db/models')(db);
var authUtils = require('../auth/utils');

module.exports = {
  getAllApplicants: function(req, res) {
    Models.Applicant.findAll()
      .then(function(results) {
        return res.send(results);
      })
      .catch(function(err) {
        return res.send(err);
      });
  },

  getAllJobs: function(req, res) {
    Models.Job.findAll()
      .then(function(data) {
        return res.send(data);
      })
      .catch(function(err) {
        return res.send(err);
      });
  },
  login: function(req, res) {
    // decoded token can be viewed thru authUtils.decodeToken(req.headers['x-access-token'])
    Models.Applicant.findOne({ where: {username: req.body.username }})
      .then(function(applicant) {
        applicant.verifyPassword(req.body.password, function(err, isVerified) {
          //Error in verifying password
          if (err) {
            console.log('error');
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
            var token = authUtils.issueToken(applicant.id, 'Applicant');
            console.log('Sign in successful');
            return res.send({
              type: true,
              token: token,
              data: applicant
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

  signup: function(req, res) {
    var newUser = Models.Applicant.build({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      username: req.body.username,
      password: req.body.password,
      anon_id: req.body.anon_id,
      email: req.body.email,
      work_exp: req.body.workExp,
      education: req.body.education,
      city: req.body.city,
      resume: req.body.resume
    })
      .setPassword(req.body.password, function(updated) {
        updated.save()
          .then(function() {
            console.log('updated.id: ', updated.id);
            var token = authUtils.issueToken(updated.id, 'Applicant');
            return res.send({
              data: updated,
              type: true,
              token: token
            });
          })
          //if username alredy exist send back validation error
          .catch(function(error) {
            return res.send({
              type: false,
              data: error
            });
          });
      });


    // console.log(newUser);
      // .setPassword(req.body.password, function(updated) {
      //   newUser.set('password', updated)

      // // console.log('new user is:',newUser)
      // // .then(function(newApplicant) {
      // //   // console.log('newApplicant is :',newApplicant)
      // //   return res.send(newApplicant);
      // // })
      // // .catch(function(err) {
      // //   console.log('error in saving applicant');
      // //   return res.send(err);
      // // })
      // });
  //   //Postgress clien from connection pool
  //   pg.defaults.ssl = true;
  //   pg.connect(connectStr, function(err, client, done) {
  //     //Handle connection errors
  //     if (err) {
  //       done();
  //       console.log(err);
  //       return res.send('failed');
  //     }
  //     //need to create a anon_id still
  //     var query = "INSERT INTO applicants (first_name, last_name, username, password, anon_id, email, work_exp, education, city) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id, anon_id";
  //     client.query(query, [req.body.firstName, req.body.lastName, req.body.username, req.body.password, 'need to make anon_id', req.body.email, req.body.workExp, req.body.education, req.body.city], function(err, result) {
  //       if(err) {
  //         console.log("error on applicant signup", err);
  //         return res.json(err);
  //       } else {
  //         client.end();
  //         return res.json(result.rows[0])
  //       }
  //     });
  //   });
  },

  // getAllJobs: function(req, res) {
  //   var results = [];
  //   pg.defaults.ssl = true;
  //   pg.connect(connectStr, function(err, client, done) {

  //     var query = client.query("SELECT * FROM jobs");

  //     query.on('row', function(row) {
  //       results.push(row);
  //     });

  //     query.on('end', function() {
  //       done();
  //       return res.json(results);
  //     });
  //   });
  // },
  submitApplication: function(req, res) {
    var applicantId = authUtils.decodeToken(req.headers['x-access-token']).id;
    Models.Job.findById(req.body.job_id)
      .then(function(job) {
        Models.Applicant.findById(applicantId)
        .then(function(applicant) {
          job.hasApplicant(applicant)
          .then(function(result) {
            if(result) {
            return res.send(result)
            }
            job.addApplicant(applicant)
            return res.send(applicant)
          })
        });
      })
      .catch(function(err) {
        return res.send(err);
      });
  }
  // submitApplication: function(req, res) {
  //   pg.defaults.ssl = true;
  //   pg.connect(connectStr, function(err, client, done) {
  //     if (err) {
  //       done();
  //       console.log(err);
  //       return res.send(err);
  //     }

  //     //need to create anon_id and change values
  //     var query = "INSERT INTO jobs_applicants (jobs_id, applicants_id) VALUES ($1, $2)";
  //     client.query(query, [req.body.jobs_id, req.body.applicants_id], function(err, result) {
  //       if(err) {
  //         console.log("error on submitApplication" , err.detail);
  //         return res.send(err);
  //       }
  //       return res.send(result.rowCount);
  //     });
  //   });
  // },



};

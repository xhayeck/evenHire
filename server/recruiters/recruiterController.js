//Uses dotenv to get process.env variables, won't need with sequelize
// require('dotenv').config();
// var connectStr = process.env.DATABASE_URL;
// var pg = require('pg');

//Require our database instance with its models
var db = require('../db/db').db;
var Models = require('../db/models')(db);
var authUtils = require('../auth/utils');

module.exports = {
  getAllJobs: function(req, res) {
    Models.Job.findAll({where: {recruiterId: req.params.id}})
      .then(function(results) {
        return res.send(results);
      })
      .catch(function(err) {
        return res.send(err);
      });
    // var results = [];
    // //Postgress clien from connection pool
    // pg.defaults.ssl = true;
    // pg.connect(connectStr, function(err, client, done) {
    //   //Handle connection errors
    //   if (err) {
    //     done();
    //     console.log(err);
    //     return res.send('failed');
    //   }
    //   //SQL query, select data
    //   var query = client.query("SELECT * FROM jobs");

    //   //Stream results back one row at a time
    //   query.on('row', function(row) {
    //     results.push(row);
    //   });
    //   //Close connection & return results after all data is received
    //   query.on('end', function() {
    //     done();
    //     return res.json(results);
    //   });
    // });
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
            var token = authUtils.issueToken(recruiter);
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

  postJob: function(req, res) {
    Models.Recruiter.findById(1)
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
    // pg.defaults.ssl = true;
    // var newRecruiter = {
    //   username: req.body.username,
    //   password: req.body.password,
    //   companyName: req.body.companyName,
    //   email: req.body.email
    // };

    // pg.connect(connectStr, function(err, client, done) {
    //   if(err) {
    //     done();
    //     console.log('Error on connecting to db: ', err);
    //     return res.send(err);
    //   }
    //   //If username already exists in recruiters table
    //   client.query("SELECT username FROM recruiters WHERE username = '" + newRecruiter.username + "';", function(err, result) {
    //     if (result.rowCount > 0) {
    //       client.end();
    //       return res.json('Username already exists in database: ', result);
    //     } else if (result.rowCount === 0) {
    //       var query = "INSERT INTO recruiters (name, username, password, email) values ($1, $2, $3, $4) RETURNING id";

    //       client.query(query, [newRecruiter.companyName, newRecruiter.username, newRecruiter.password, newRecruiter.email], function(err, result) {
    //         if(err) {
    //           console.log("Error in addint to database: ", err.detail);
    //           return res.json(err);
    //         } else {
    //           client.end();
    //           return res.json(result.rows[0]);
    //         }
    //       });
    //     }
    //   });
    // });
  }
};

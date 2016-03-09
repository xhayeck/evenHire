//Use datatypes of Sequelize to define property types
var Sequelize = require('Sequelize');

module.exports = function(db) {
  var Recruiter = db.define('recruiters', {
    name: Sequelize.STRING,
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING
  });

  var Applicant = db.define('applicants', {
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING,
    anon_id: Sequelize.STRING,
    email: Sequelize.STRING,
    city: Sequelize.STRING,
    work_exp: Sequelize.TEXT,
    education: Sequelize.TEXT,
    resume: Sequelize.TEXT
  });

  var Job = db.define('jobs', {
    title: Sequelize.STRING,
    location: Sequelize.STRING,
    description: Sequelize.TEXT,
    industry: Sequelize.STRING,
    career_level: Sequelize.STRING,
    job_type: Sequelize.STRING,
    experience: Sequelize.TEXT
    //sequelize automatically creates a createdAt property
  });

  var JobApplicant = db.define('jobs_applicants', {
  });

  //set up one to many relationship
  Recruiter.hasMany(Job);
  Job.belongsTo(Recruiter);
  //set up many to many relationship
  Job.belongsToMany(Applicant, {through: 'JobApplicant'});
  Applicant.belongsToMany(Job, {through: 'JobApplicant'});

  //to sync and possibly clear db uncomment this line:
  // sequelize.sync({force: true});

  return {
    Job: Job,
    Applicant: Applicant,
    Recruiter: Recruiter,
    JobApplicant: JobApplicant
  }
};

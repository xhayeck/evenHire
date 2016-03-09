var Sequelize = require('Sequelize');

module.exports = function(sequelize) {
  var Recruiter = sequelize.define('recruiters', {
    name: Sequelize.STRING,
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING,
    email: Sequelize.STRING
  });

  var Applicant = sequelize.define('applicants', {
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

  var Job = sequelize.define('jobs', {
    title: Sequelize.STRING,
    location: Sequelize.STRING,
    description: Sequelize.TEXT,
    industry: Sequelize.STRING,
    career_level: Sequelize.STRING,
    job_type: Sequelize.STRING,
    experience: Sequelize.TEXT
    //sequelize automatically creates a createdAt property
  });

  var JobApplicant = sequelize.define('jobs_applicants', {
  });

  Recruiter.hasMany(Job, {as: 'Jobs'});
  Applicant.belongsToMany(Job, {through: JobApplicant});
  Job.belongsToMany(Applicant, {through: JobApplicant});

  return {
    Job: Job,
    Applicant: Applicant,
    Recruiter: Recruiter,
    JobApplicant: JobApplicant
  }
};

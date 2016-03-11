angular.module('evenhire.recruiters.factory', [])
  .factory('Recruiter', ['$http', 'Auth', function($http, Auth) {
    var recruiter = {};

    recruiter.signup = function(newUser) {
      return $http({
        method: 'POST',
        url: 'api/recruiters/signup',
        data: newUser
      })
      .then(function(data){
        if (data.data.type) {
          Auth.setUser(data.data.data, 'recruiter');
        }
        return data.data;
      }, function(err) {
        console.log("Error: ", err);
      });
    };

    recruiter.login = function(user){
      return $http({
        method: 'POST',
        url: 'api/recruiters/login',
        data: user
      })
      .then(function(data){
        if (data.data.type) {
          Auth.setUser(data.data.data, 'recruiter');
        }
        return data.data;
      }, function(err) {
        return err;
      });
    };

    recruiter.getPostedJobs = function() {
      return $http({
        method: 'GET',
        url: 'api/recruiters/allPostedJobs'
      })
      .then(function(data) {
        //data.data is an array of job objects
        return data.data;
      }, function(err) {
        console.log('error in getting all posted jobs');
      });
    }

    recruiter.postNewJob = function(newJobObj) {
      return $http({
        method: 'POST',
        url: 'api/recruiters/newJob',
        data: newJobObj
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        return err;
      });
    }

    recruiter.grabApplicants = function(jobId) {
      console.log('WHats my number!: ', jobId);
      console.log('what up peeps');
      return $http({
        method: 'POST',
        url: 'api/recruiters/whoAreApplicants',
        data: jobId
      })
      .then (function(data) {
        return data.data;
      }, function(err) {
        console.log('Error in reaching server. Error: ', err);
      });
    }

    return recruiter;
  }])

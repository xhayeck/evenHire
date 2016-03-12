angular.module('evenhire.recruiters.factory', [])
  .factory('Recruiter', ['$http', 'Auth', function($http, Auth) {
    var recruiter = {};

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
    };

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
    };

    recruiter.grabApplicants = function(jobId) {
      return $http({
        method: 'POST',
        url: 'api/recruiters/getApplicants',
        data: {jobId: jobId}
      })
      .then (function(data) {
        return data.data;
      }, function(err) {
        console.log('Error in reaching server. Error: ', err);
      });
    };

    return recruiter;
  }])

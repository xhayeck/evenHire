angular.module('evenhire.applicants.factory', [])

  .factory('Applicant',['$http', '$window', '$state', function ($http, $window, $state) {
    var applicant = {};

    applicant.signup = function(newUser) {
      return $http({
        method: 'POST',
        url: 'api/applicants/signup',
        data: newUser
      })
      .then(function(data) {
        return data.data;
      }, function(response) {
        console.log(response)
      });
    };

    applicant.login = function(user) {
      return $http({
        method: 'POST',
        url: '/api/applicants/login',
        data: user
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        return err;
      });
    };

    applicant.allJobs = function() {
      return $http({
        method: 'GET',
        url: 'api/applicants/allJobs'
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        console.log('error in getting jobs');
      });
    };

    applicant.apply = function(applicationObject) {
      return $http({
        method: 'POST',
        url: 'api/applicants/apply',
        data: applicationObject
      })
      .then(function(data) {
        return data.data;
      }, function(err) {
        console.log('error in applying for job');
      });
    }

    return applicant;
  }])

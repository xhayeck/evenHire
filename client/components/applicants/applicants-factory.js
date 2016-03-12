angular.module('evenhire.applicants.factory', [])

  .factory('Applicant',['$http', '$window', '$state', 'Auth', function ($http, $window, $state, Auth) {
    var applicant = {};

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
        return err
      });
    }

    applicant.login = function(user) {
      return $http({
        method: 'POST',
        url: '/api/applicants/login',
        data: user
      })
      .then(function(data) {
        if (data.data.type) {
          Auth.setUser(data.data.data, 'Applicant');
        }
        return data.data;
      }, function(err) {
        return err;
      });
    };

    applicant.signup = function(newUser) {
      return $http({
        method: 'POST',
        url: 'api/applicants/signup',
        data: newUser
      })
      .then(function(data) {
        if (data.data.type) {
          Auth.setUser(data.data.data, 'Applicant');
        }
        return data.data.data;
      }, function(response) {
        console.log(response)
      });
    };

    return applicant;
  }])

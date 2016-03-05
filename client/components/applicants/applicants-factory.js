angular.module('evenhire.applicants.factory', [])

  .factory('Applicant',['$http', function ($http) {
    var applicant = {};

    applicant.signup = function(newUser) {
      return $http({
        method: 'POST',
        url: 'api/applicants/signup',
        data: newUser
      })
      .then(function(data) {
        console.log(data);
      }, function errorCallback(response) {
        console.log(response)
      });
    };

    applicant.login = function (user) {
      return $http({
        method: 'POST',
        url: '/api/applicants/login',
        data: user
      })
      .then(function(data) {
        console.log(data)
      }, function(err) {
        console.log('error in loging in');
      });
    };

    return applicant;
  }])
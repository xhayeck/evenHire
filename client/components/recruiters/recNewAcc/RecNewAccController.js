angular.module('evenhire.recNewAcc', [])

  .controller('RecNewAccController', ['$scope', '$state', '$http', 'Recruiter', '$window', 'Auth', function($scope, $state, $http, Recruiter, $window, Auth) {

    $scope.recruiter = {};

    $scope.createRecAcc = function() {
      //Checking if passwords match
      if($scope.recruiter.verify_password === $scope.recruiter.password) {
        //send form data to the server at api/recruiter/signUp
        Auth.signUp($scope.recruiter, 'recruiter')
        .then(function(data) {
          if (!data.type) {
            console.log('User already exists', data.data);
          } else {
            $window.localStorage.setItem('evenhire', data.token);
            console.log('New recruiter id: ', data);
            $state.go('recruiters')
          }
          });
      } else {
        //Alerting recruiter their passwords don't match
        alert("Your passwords don't match!");
      }
    };


    // This function is used in conjunction with test example
    // $scope.sum = function() {
    //   $scope.z = $scope.x + $scope.y;
    // };


  }]);

angular.module('evenhire.appNewAcc', ['ngDialog'])

  .controller('AppNewAccController', ['$scope', '$state','$http','Applicant','$window', 'Auth', function ($scope, $state, $http, Applicant, $window, Auth) {

    $scope.applicant = {};

    // $scope.customeFullscreen = $mdMedia('xs') || $mdMedia('sm');


    // 'ndDialog'
    // $scope.showAlert = function(ev) {
    //   ngDialog.open({template: 'passwordVerification.tmpl.html', classname: 'ngdialog-theme-default'});
    // };

    // else {
    //     $scope.showAlert();
    //   }

    $scope.createAccount = function() {
      //send form data to the server at api/applicants/login
      if($scope.applicant.verify_password === $scope.applicant.password) {
        Auth.signUp($scope.applicant, 'applicant')
        .then(function(data) {
          if (!data.type) {
            console.log('User already exists', data.data);
          } else {
            $window.localStorage.setItem('evenhire', data.token);
            console.log('NEW USER is :', data);
            $state.go('allJobs');
          }
        }); 
      };   
    };

  }]);


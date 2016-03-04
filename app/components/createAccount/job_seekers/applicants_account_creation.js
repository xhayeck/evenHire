angular.module('evenhire.applicantAccCre', [])

.controller('applicantCreation', ['$scope', '$state', function ($scope, $state) {

  $scope.applicant = {
    firstName: 'example1',
    lastName: 'example2',
    companyName: 'example3',
    username: 'example4',
    email: 'example5',
    password: 'example6'
  };

  $scope.sendApplicantInfo = function () {
    //send $scope.company to router
  };

}]);

angular.module('evenhire.applicantAccCre', [])

.controller('applicantCreation', ['$scope', '$state', function ($scope, $state) {

  $scope.applicant = {
    firstName: 'example1',
    lastName: 'example2',
    username: 'example3',
    email: 'example4',
    password: 'example5'
  };

  $scope.sendApplicantInfo = function () {
    //send $scope.company to router
  };

}]);

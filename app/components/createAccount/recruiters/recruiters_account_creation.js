angular.module('evenhire.recruitersAccCre', [])

.controller('recruiterCreation', ['$scope', '$state', function ($scope, $state) {

  $scope.company = {
    firstName: 'example1',
    lastName: 'example2',
    companyName: 'example3',
    username: 'example4',
    email: 'example5',
    password: 'example6'
  };

  $scope.sendRecruitInfo = function () {
    //send $scope.company to router
  };

}]);

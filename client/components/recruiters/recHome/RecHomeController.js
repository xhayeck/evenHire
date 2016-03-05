angular.module('evenhire.recruiters', [])


.controller('RecHomeController', ['$scope', '$state', function ($scope, $state) {
  $scope.test = function() {
    console.log('connected to recruiters controller');
  }
  // $scope.findJobs = function () {

  // };

  // $scope.findApplicants = function () {

  // };

}]);

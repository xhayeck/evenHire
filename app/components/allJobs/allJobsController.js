
angular.module('evenhire.allJobs', [])

  .controller('allJobsController', ['$scope', '$state', function ($scope, $state) {
    $scope.testFunc = function() {
      console.log('inside allJobs controller');
    }
  }])

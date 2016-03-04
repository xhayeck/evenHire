
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', function ($scope, $state) {
    $scope.testFunc = function() {
      console.log('inside allJobs controller');
    }
  }])

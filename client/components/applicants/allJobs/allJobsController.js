
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state', function ($scope, $state) {
    $scope.jobs = {
      uber : 'driver',
      google : 'front-end'
    }
    $scope.testFunc = function() {
      console.log('inside allJobs controller');
    }
}]);


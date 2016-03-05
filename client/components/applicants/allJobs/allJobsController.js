
angular.module('evenhire.allJobs', [])

  .controller('AllJobsController', ['$scope', '$state','$uibModal', '$log', function ($scope, $state, $uibModal, $log) {
    $scope.jobs = {
      uber : 'driver',
      google : 'front-end'
    }
    $scope.testFunc = function() {
      console.log('inside allJobs controller');
    }
}]);


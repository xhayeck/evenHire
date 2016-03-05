angular.module('evenhire.appNewAcc', [])

  .controller('AppNewAccController', ['$scope', '$state','$http', function ($scope, $state, $http) {

    $scope.applicant = {};

    $scope.sendApplicantInfo = function() {
      //send $scope.company to router
      console.log('inside createAccount controller');
      console.log($scope.applicant);

      return $http({
      method: 'POST',
      url: 'api/applicants',
      data: $scope.applicant
      }).then(function successCallback(response) {
        console.log(response);
      }, function errorCallback(response) {
        console.log(response)
      });

    };

  }]);


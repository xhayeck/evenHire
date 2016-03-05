angular.module('evenhire.appNewAcc', [])

  .controller('AppNewAccController', ['$scope', '$state','$http', function ($scope, $state, $http) {

    $scope.applicant = {};

    $scope.sendApplicantInfo = function() {
      //send $scope.company to router
      return $http({
      method: 'POST',
      url: 'api/applicants/signup',
      data: $scope.applicant
      })
      .then(function(data) {
        console.log(data);
      }, function errorCallback(response) {
        console.log(response)
      });

    };

    $scope.isEnter = function(envent, func, arg){
    console.log("listening to keys");
    if(envent.keyCode===13){
      func.apply(null, arg);
      }
    }

  }]);


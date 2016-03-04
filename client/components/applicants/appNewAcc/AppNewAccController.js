angular.module('evenhire.appNewAcc', [])

  .controller('AppNewAccController', ['$scope', '$state', function ($scope, $state) {

    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    };
  }]);

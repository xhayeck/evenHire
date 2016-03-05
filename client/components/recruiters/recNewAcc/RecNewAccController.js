angular.module('evenhire.recNewAcc', [])

  .controller('RecNewAccController', ['$scope', '$state', function ($scope, $state) {

    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    };
  }]);

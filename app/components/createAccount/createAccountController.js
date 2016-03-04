angular.module('evenhire.createAccount', [])
  .controller('createAccountController', [$scope, function($scope) {
    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    }
  }])
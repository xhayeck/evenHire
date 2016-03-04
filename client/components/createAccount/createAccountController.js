angular.module('evenhire.createAccount', [])

  .controller('createAccountController', ['$scope', '$state', function ($scope, $state) {

    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    };
  }]);

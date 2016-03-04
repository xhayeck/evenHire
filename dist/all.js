//handles setup of app, loads in angular dependencies

//routes and route configuration
angular.module('evenhire',[])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('', {

      })
      .state('', {

      })
      .state('', {

      })


  })

//Controller for home

angular.module('evenhire.login', [])
  .controller('loginController', [$scope, function($scope) {
    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
    };
}]);

angular.module('evenhire.recruiters', [])

.controller('recruitersController', [$scope, function ($scope) {

  $scope.findJobs = function () {

  };

  $scope.findApplicants = function () {

  };

}]);
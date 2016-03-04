//handles setup of app, loads in angular dependencies
// angular.module('evenhire',[])
//routes and route configuration
angular.module('evenhire',[
  'evenhire.login',
  'evenhire.createAccount',
  'evenhire.home',
  'evenhire.recruiters',
  'evenhire.allJobs',
  'ui.router'])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home/homeView.html',
        controller: 'homeController'
      })
      .state('allJobs', {
        url: '/allJobs',
        templateUrl: 'allJobs/allJobs.html',
        controller: 'allJobsController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'login/loginView.html',
        controller: 'loginController'
      })
      .state('recruiters', {
        url: '/recruiters',
        templateUrl: 'recruiters/recruitersView.html',
        controller: 'recruitersController'
      })
      .state('createAccount', {
        url: '/createAccount',
        templateUrl: 'createAccount/createAccountView.html',
        controller: 'createAccountController'
      })


  })

angular.module('evenhire.createAccount', [])
  .controller('createAccountController', [$scope, function($scope) {
    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    }
  }])
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
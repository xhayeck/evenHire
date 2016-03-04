//handles setup of app, loads in angular dependencies
// angular.module('evenhire',[])
//routes and route configuration
<<<<<<< 0c366ec5b2ab4607402a0c880dca1e2fc0b705e4
angular.module('evenhire',[])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('', {

      })
      .state('', {

      })
      .state('', {

=======
angular.module('evenhire',[
  'evenhire.login',
  'evenhire.'
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
>>>>>>> [feat] Completed routes
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

<<<<<<< 0c366ec5b2ab4607402a0c880dca1e2fc0b705e4
}]);
=======
angular.module('evenhire.createAccount', [])
  .controller('createAccountController', [$scope, function($scope) {
    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    }
  }])
>>>>>>> [feat] Completed routes

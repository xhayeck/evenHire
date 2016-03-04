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
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
        url: '/',
        templateUrl: 'home/homeView.html',
=======
        url: '/home',
        templateUrl: 'homeView.html',
>>>>>>> [feat] Added cdns
        controller: 'homeController'
      })
      .state('allJobs', {
        url: '/allJobs',
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
        templateUrl: 'allJobs/allJobs.html',
=======
        templateUrl: 'allJobsView.html',
>>>>>>> [feat] Added cdns
        controller: 'allJobsController'
      })
      .state('login', {
        url: '/login',
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
        templateUrl: 'login/loginView.html',
=======
        templateUrl: 'loginView.html',
>>>>>>> [feat] Added cdns
        controller: 'loginController'
      })
      .state('recruiters', {
        url: '/recruiters',
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
        templateUrl: 'recruiters/recruitersView.html',
=======
        templateUrl: 'recruitersView.html',
>>>>>>> [feat] Added cdns
        controller: 'recruitersController'
      })
      .state('createAccount', {
        url: '/createAccount',
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
        templateUrl: 'createAccount/createAccountView.html',
=======
        templateUrl: 'createAccountView.html',
>>>>>>> [feat] Added cdns
        controller: 'createAccountController'
      })


  })
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
=======
angular.module('evenhire.allJobs', [])

  .controller('allJobsController', ['$scope', '$state', function ($scope, $state) {
    $scope.testFunc = function() {
      console.log('inside allJobs controller');
    }
  }])
>>>>>>> [feat] Added cdns

angular.module('evenhire.createAccount', [])
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
  .controller('createAccountController', [$scope, function($scope) {
=======

  .controller('createAccountController', ['$scope', '$state', function ($scope, $state) {
>>>>>>> [feat] Added cdns
    $scope.testFunc = function() {
      console.log('inside createAccount controller');
    }
  }])
//Controller for home
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
=======
angular.module('evenhire.home', [])

  .controller('homeController', ['$scope','$state', function ($scope, $state) {
    $scope.testFunc = function() {
      console.log('inside home controller');
    }
}]);
>>>>>>> [feat] Added cdns

angular.module('evenhire.login', [])
<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
  .controller('loginController', [$scope, function($scope) {
=======

  .controller('loginController', ['$scope','$state', function ($scope, $state) {
>>>>>>> [feat] Added cdns
    $scope.user = {};
    $scope.signIn = function() {
      console.log('trying to sign in!');
    };
}]);

angular.module('evenhire.recruiters', [])

<<<<<<< edce7c30947d24dbe43b823da1dd9cc2737fd5e2
.controller('recruitersController', [$scope, function ($scope) {
=======
.controller('recruitersController', ['$scope', '$state', function ($scope, $state) {
>>>>>>> [feat] Added cdns

  // $scope.findJobs = function () {

  // };

  // $scope.findApplicants = function () {

  // };

}]);
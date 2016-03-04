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
        url: '/home',
        templateUrl: 'homeView.html',
        controller: 'homeController'
      })
      .state('allJobs', {
        url: '/allJobs',
        templateUrl: 'allJobsView.html',
        controller: 'allJobsController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'loginView.html',
        controller: 'loginController'
      })
      .state('recruiters', {
        url: '/recruiters',
        templateUrl: 'recruitersView.html',
        controller: 'recruitersController'
      })
      .state('createAccount', {
        url: '/createAccount',
        templateUrl: 'createAccountView.html',
        controller: 'createAccountController'
      })


  })
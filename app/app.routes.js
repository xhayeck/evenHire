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
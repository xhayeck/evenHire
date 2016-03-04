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
        templateUrl: 'components/home/homeView.html',
        controller: 'homeController'
      })
      .state('allJobs', {
        url: '/allJobs',
        templateUrl: 'components/allJobs/allJobsView.html',
        controller: 'allJobsController'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'components/login/loginView.html',
        controller: 'loginController'
      })
      .state('recruiters', {
        url: '/recruiters',
        templateUrl: 'components/recruitersView.html',
        controller: 'recruitersController'
      })
      .state('createAccount', {
        url: '/createAccount',
        templateUrl: './../components/createAccountView.html',
        controller: 'createAccountController'
      });


  });

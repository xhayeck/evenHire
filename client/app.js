//routes and route configuration
angular.module('evenhire',[
  'evenhire.home',
  'evenhire.allJobs',
  'evenhire.appLogin',
  'evenhire.appNewAcc',
  'evenhire.recruiters',
  'evenhire.recLogin',
  'evenhire.recNewAcc',
  'ui.router',
  'evenhire.applicants.factory',
  'evenhire.recruiters.factory',
  'ngMaterial'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'components/home/homeView.html',
        controller: 'HomeController'
      })
      .state('allJobs', {
        url: '/allJobs',
        templateUrl: 'components/applicants/allJobs/allJobsView.html',
        controller: 'AllJobsController'
      })
      .state('appLogin', {
        url: '/appLogin',
        templateUrl: 'components/applicants/appLogin/appLoginView.html',
        controller: 'AppLoginController'
      })
      .state('appNewAcc', {
        url: '/appNewAcc',
        templateUrl: 'components/applicants/appNewAcc/appNewAccView.html',
        controller: 'AppNewAccController'
      })
      .state('recruiters', {
        url: '/recruiters',
        templateUrl: 'components/recruiters/recHome/recHomeView.html',
        controller: 'RecHomeController',
        authenticate: true
      })
      .state('recLogin', {
        url: '/recLogin',
        templateUrl: 'components/recruiters/recLogin/recLoginView.html',
        controller: 'RecLoginController'
      })
      .state('recNewAcc', {
        url: '/recNewAcc',
        templateUrl: 'components/recruiters/recNewAcc/recNewAccView.html',
        controller: 'RecNewAccController'
      });
  })
  .run(function($rootScope, $state, Applicant, $location) {
    $rootScope.$on('$routeChangeStart', function(evt, next, current) {
      if(next.$$route && next.$$route.authenticate && !Applicant.isAuth()) {
        console.log('not authenticated');
        $state.go('appLogin');
      }
    });
  });

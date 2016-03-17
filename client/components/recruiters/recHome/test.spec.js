// describe('RecHomeController', function () {

//   var $scope;
//   var httpBackend;
//   var $state;
//   var Recruiter;
//   var $controller;

//   //load module
//   beforeEach(module('evenhire'));
//   //inject services for testing
//   beforeEach(inject(function ($injector) {
    
//     $rootScope = $injector.get('$rootScope');
//     httpBackend = $injector.get('$httpBackend');
//     $state = $injector.get('$state');
//     Recruiter = $injector.get('Recruiter');
//     $controller = $injector.get('$controller');
//     $scope = $rootScope.$new();

//     createController = function () {
//       return $controller('RecHomeController', {
//         $scope: $scope,
//         $state: $state,
//         Recruiter: Recruiter
//       });
//     };

//     httpBackend.whenGET('api/recruiter/allPostedJobs').respond(200, {data: ['job1', 'job2', 'job3']});
//     httpBackend.whenGET('components/home/homeView.html').respond('<div>mock template</div>');
//     createController();

//   }));

//   afterEach(function () {
//     httpBackend.flush();
//     httpBackend.verifyNoOutstandingExpectation();
//     httpBackend.verifyNoOutstandingRequest();
//   });

//   describe('it should have functions', function () {

//     it('should have clickToOpen defined', function () {
//       expect($scope.clickToOpen).to.exist;
//     });

//     it('should have closeDialog defined', function () {
//       expect($scope.closeDialog).to.exist;
//     });

//     it('should have clickToOpenContact defined', function () {
//       expect($scope.clickToOpenContact).to.exist;
//     });

//     it('should have getApplicants defined', function () {
//       expect($scope.getApplicants).to.exist;
//     });

//   });

// });
<<<<<<< HEAD
// describe("A test suite", function() {
//    beforeEach(function() { });
//    afterEach(function() { });
//    it('should pass', function() { expect(false).to.be.false; });
// });

// describe('RecHomeController', function() {
//   var $scope;
//   var httpBackend;
//   var $state;
//   var Recruiter;
//   var $controller;

//   beforeEach(module('evenhire'));
//   beforeEach(inject(function($injector) {
//     $rootScope = $injector.get('$rootScope');
//     httpBackend = $injector.get('$httpBackend');
//     $state = $injector.get('$state');
//     Recruiter = $injector.get('Recruiter');
//     $controller = $injector.get('$controller');
//     $scope = $rootScope.$new();

//     createController = function() {
//       return $controller('RecHomeController', {
//         $scope: $scope,
//         $state: $state,
//         Recruiter: Recruiter
//       });
//     };
//     createController();
//   }));

//   describe('the postJob function', function () {
//     it('should be defined', function() {
//       expect($scope.postJob).to.exist;
//     });
//   });

// });
=======
describe('RecHomeController', function() {

  var $scope;
  var httpBackend;
  var $state;
  var Applicant;
  var $controller;

  beforeEach(module('evenhire'));

  beforeEach(inject(function ($injector) {

    $rootScope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');
    Applicant = $injector.get('Applicant');
    $controller = $injector.get('$controller');
    $scope = $rootScope.$new();

    createController = function() {
      return $controller('RecHomeController', {
        $scope: $scope,
        $state: $state,
        Applicant: Applicant
      });
    };

      httpBackend.whenGET('api/recruiter/allPostedJobs').respond(200, {data: ['firstName', 'lastName', 'email']});
      httpBackend.whenGET('components/home/homeView.html').respond('<div>mock template</div>');
      createController();

  }));

  afterEach(function () {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('it should have functions', function () {

    it('should have clickToOpen defined', function () {
      expect($scope.clickToOpen).to.exist;
    });

    it('should have closeDialog defined', function () {
      expect($scope.closeDialog).to.exist;
    });

    it('should have clickToOpenContact defined', function () {
      expect($scope.clickToOpenContact).to.exist;
    });

    it('should have getApplicants defined', function () {
      expect($scope.getApplicants).to.exist;
    });

  });

});
>>>>>>> [feat] Test setup completed for RecHomeController. No tests passing

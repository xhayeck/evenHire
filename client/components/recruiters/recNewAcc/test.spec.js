// describe('RecNewAccController', function() {
//   // beforeEach(module('ui.router'));
//   // beforeEach(module('evenhire.recNewAcc'));
//   var scope;
//   var createController;
//   var httpBackend;
//   var $state;
//   // var $controller;
//   // var $httpBackend;
//   beforeEach(module('evenhire'));
//   beforeEach(inject(function($rootScope, $controller, $httpBackend) {
//     scope = $rootScope.$new();
//     httpBackend = $httpBackend;

//     createController = function() {
//       return $controller('RecNewAccController', {
//         $scope: scope,
//         $http: httpBackend
//       });
//     };
//     createController();
//   }));

//   it('should have a createRecAccount fn', function() {
//     expect(scope.createRecAcc).toBeDefined();
//   });

//   it('1 + 1 should equal 2', function() {
//     scope.x = 1;
//     scope.y = 2;
//     scope.sum();
//     expect(scope.z).toBe(3);
//   });

// });

describe('RecNewAccController', function () {

  var $scope;
  var httpBackend;
  var $state;
  var Recruiter;
  var $controller;

  //load module
  beforeEach(module('evenhire'));
  //inject services for testing
  beforeEach(inject(function ($injector) {
    $rootScope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');
    Recruiter = $injector.get('Recruiter');
    $controller = $injector.get('$controller');
    $scope = $rootScope.$new();

    createController = function () {
      return $controller('RecNewAccController', {
        $scope: $scope,
        $state: $state,
        Recruiter: Recruiter
      });
    };

    httpBackend.whenGET('api/recruiter/allPostedJobs').respond(200, {data: ['job1', 'job2', 'job3']});
    httpBackend.whenGET('components/home/homeView.html').respond('<div>mock template</div>');
    createController();

  }));

  afterEach(function () {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('it should be able to create a Recruiter account', function () {

    it('should define function to create account', function () {
      expect($scope.createRecAcc).to.exist;
    });

  });

});


























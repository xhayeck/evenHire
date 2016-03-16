describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should pass', function() { expect(false).to.be.false; });
});

describe('AppNewAccController', function() {

  var $scope;
  var httpBackend;
  var $state;
  var Applicant;
  var $controller;


  beforeEach(module('evenhire'));
  beforeEach(inject(function($injector) {
    $rootScope = $injector.get('$rootScope');
    httpBackend = $injector.get('$httpBackend');
    $state = $injector.get('$state');
    Applicant = $injector.get('Applicant');
    $controller = $injector.get('$controller');
    $scope = $rootScope.$new();

    createController = function() {
      return $controller('AppNewAccController', {
        $scope: $scope,
        $state: $state,
        Applicant: Applicant
      });
    };

    httpBackend.whenGET('api/applicant/signup').respond(200, {data: ['firstName', 'lastName', 'email', 'username', 'city']});
    httpBackend.whenGET('components/home/homeView').respond('<div>mock template</div>');
    createController();

  }));

  afterEach(function () {
    httpBackend.flush();
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  describe('should have a createAccount function', function () {

    it('should be defined', function () {
      expect($scope.createAccount).to.exist;
    });
    
  });

});

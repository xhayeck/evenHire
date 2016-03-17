describe("A test suite", function() {
   beforeEach(function() { });
   afterEach(function() { });
   it('should pass', function() { expect(false).to.be.false; });
});

describe('AppLoginController', function() {
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
      return $controller('AppLoginController', {
        $scope: $scope,
        $state: $state,
        Applicant: Applicant
      });
    };
    createController();
  }));

  // afterEach(function() {
  //   httpBackend.flush();
  //   httpBackend.verifyNoOutstandingExpectation();
  //   httpBackend.verifyNoOutstandingRequest();
  // });
  describe('the logIn function', function () {
    it('should be defined', function() {
      expect($scope.logIn).to.exist;
    });
  });

});

describe('AllJobsController', function () {

  var scope;
  var createController;
  var httpBackend;
  var $state;

  beforeEach(module('evenhire'));
  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    createController = function() {
      return $controller('AllJobsController', {
        '$scope': scope,
        '$http': $httpBackend
      });
    };
    createController();
  }));

  it('should have a getAllJobs function', function() {
    expect(scope.getAllJobs).toBeDefined();
  });

  it('should have a submitApplication function', function() {
    expect(scope.submitApplication).toBeDefined();
  });



});
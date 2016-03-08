describe('AppLoginController', function() {
  var scope;
  var createController;
  var httpBackend;
  var $state;

  beforeEach(module('evenhire'));
  beforeEach(inject(function($rootScope, $controller, $httpBackend) {
    scope = $rootScope.$new();
    httpBackend = $httpBackend;

    createController = function() {
      return $controller('AppLoginController', {
        '$scope': scope,
        '$http': $httpBackend
      });
    };
    createController();
  }));


  it('should have a signIn function', function() {
    expect(scope.signIn).toBeDefined();
  });

})

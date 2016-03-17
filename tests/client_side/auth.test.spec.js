describe('The Auth Controller', function(){

    var scope;
    var Auth = {};
    //load module
    beforeEach(module('evenhire'));
    //inject services for testing, we use _ before and after so we can have our var name be the same as the injected service
    beforeEach(inject(function ($rootScope, $controller, _Auth_, $httpBackend) {
        Auth = _Auth_;
        httpBackend = $httpBackend;
        scope = $rootScope.$new();
        $controller('AuthController', {
            $scope: scope
        });
    }));

    describe('should have a logout function', function () {
        it('should be defined', function () {
            expect(scope.logOut).to.not.be.undefined;
        });
    });

    describe('should have a getUser function', function () {
        it('should be defined', function () {
            expect(scope.getUser).to.not.be.undefined;
        });
    });

    describe('the signout function', function () {
      it('should be defined', function () {
          expect(Auth.isAuth).to.not.be.undefined;
      });
    });

});

angular.module('evenhire.appLogin', [])

  .controller('AppLoginController', ['$scope','$state','$http', function ($scope, $state, $http) {

    $scope.user = {};
    $scope.signIn = function() {
      return $http({
        method: 'POST',
        url: '/api/applicants/login',
        data: $scope.user
      })
      .then(function(data) {
        console.log(data)
      }, function(err) {
        console.log('error in loging in');
      });
    };

    // $scope.isEnter = function(envent, func, arg){
    // console.log("listening to keys");
    // if(envent.keyCode===13){
    //   func.apply(null, arg);
    //   }
    // }

}]);

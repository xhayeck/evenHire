angular.module('evenhire.recLogin', [])

  .controller('RecLoginController', ['$scope','$state', '$http', function ($scope, $state, $http) {

    $scope.isEnter = function(envent, func, arg){
    console.log("listening to keys");
    if(envent.keyCode===13){
      func.apply(null, arg);
     }
    };

    $scope.user = {};
    $scope.signIn = function() {
      return $http({
        method: 'POST',
        url: 'api/recruiters/login',
        data: $scope.user
      })
      .then(function(data) {
        console.log(data);
      }, function(err) {
        console.log('Error in logging in');
      });
    };
}]);

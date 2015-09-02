var app = angular.module('app', []);

app.controller('controller',['$scope', '$http', function($scope, $http){
    $scope.responseD = "Default Response D";
    $scope.responseS = "Default Response S";
    $scope.object = {name:"Joe", power:50};
    $scope.hide = true;
    $scope.func1 = function(){$scope.hide = false;};
    $scope.func2 = function(){
        $scope.hide = false;
        $http.get("http://localhost:3000/page1/").
  then(function(response) {   
    $scope.responseD = response.data;
    $scope.responseS = response.status;
    console.log(response.data+" "+response.status);
  }, function(response) {
    $scope.responseD = response.data;
    $scope.responseS = response.status;
    console.log(response.data+" "+response.status);
  });}

}]);
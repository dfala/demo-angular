angular.module('gifChat')

.controller('MyController', function ($scope, myService) {

  $scope.login = function () {
    myService.login();
  };

  $scope.newRecipe = function (text) {
    myService.createRecipe(text);
  };

});

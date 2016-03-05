angular.module('gifChat')

.factory('myService', function ($state, dataStore) {
  var service = {};
  var refUrl = "https://recipes-book.firebaseio.com";
  var myAppRef = new Firebase(refUrl);

  service.login = function () {
    myAppRef.authWithOAuthPopup("facebook", function(error, authData) {
      if (error) return console.error("Login Failed!", error);

      var userRef = new Firebase(refUrl + '/users');
      var newId = userRef.push(authData);
      // console.warn(newId.key());
      dataStore.storeUserId(newId.key());
      $state.go('myRecipes');
    });
  };

  service.createRecipe = function (text) {
    myRecipeRef = new Firebase(refUrl + '/users');
    myRecipeRef.push({
      userId: dataStore.serveUserId(),
      recipeText: text
    });
  };

  return service;
});

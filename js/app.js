angular.module('gifChat', ['ui.router'])

.config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/templates/home.html'
    })
    .state('myRecipes', {
      url: '/my-recipes',
      templateUrl: '/templates/myRecipes.html'
    })
    .state('myFeed', {
      url: '/my-feed',
      templateUrl: '/templates/myFeed.html'
    })
  }
]);

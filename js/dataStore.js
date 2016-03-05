angular.module('gifChat')

.factory('dataStore', function ($state) {
  var service = {};
  var userId;

  service.storeUserId = function (id) {
    return userId = id;
  };

  service.serveUserId = function () {
    return userId;
  };


  return service;
});

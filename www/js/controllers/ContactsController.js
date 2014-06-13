'use strict';

app.controller('ContactsController', ['$scope', 'ContactsService', function($scope, ContactsService) {

  $scope.nameFilter = '';

  $scope.getContacts = function (nameFilter) {
    ContactsService.getContacts(nameFilter).then(function (contacts) {
      $scope.contacts = contacts;
    });
  };

  $scope.getImage = function (url) {
    window.resolveLocalFileSystemURL(url,
      function (entry) {
        console.log(entry);
      }
    );
  };
}]);

'use strict';

app.controller('GalleryController', ['$scope', 'GalleryService', function($scope, GalleryService) {
  $scope.myPictures = [];

  $scope.showGallery = function () {
    GalleryService.showGallery().then(function (photos) {
      $scope.myPictures = photos;
    });
  }
}]);

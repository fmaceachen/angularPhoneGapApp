'use strict';

app.factory('GalleryService', ['$q', function($q) {

  var showGallery = function () {
    var defer = $q.defer();
    window.imagePicker.getPictures(
      function(results) {
        defer.resolve(results);
      }, function (error) {
        console.log('Error: ' + error);
        defer.reject(error);
      }
    );
    return defer.promise;
  };

  return {
    showGallery: showGallery
  }

}]);

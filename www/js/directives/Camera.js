app.directive('camera', ['$state', function($state) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      //elm.on('click', function() {
        navigator.camera.getPicture(function (imageURI) {
          $state.go('gallery');
        }, function (err) {
          ctrl.$setValidity('error', false);
        }, {
          quality: 50,
          destinationType: Camera.DestinationType.FILE_URI,
          saveToPhotoAlbum: true
        });
     // });
    }
  };
}]);

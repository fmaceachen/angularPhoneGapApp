'use strict';

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$compileProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider, $compileProvider) {

    $compileProvider.imgSrcSanitizationWhitelist(/^\s*(content):/);

    // Public routes
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'partials/home.html',
        controller: 'HomeController',
        controllerUrl: 'js/controllers/HomeController.js'

      })
      .state('camera', {
        url: '/camera',
        templateUrl: 'partials/camera.html',
        controller: 'CameraController',
        controllerUrl: 'js/controllers/CameraController.js'
      })
      .state('gallery', {
        url: '/gallery',
        templateUrl: 'partials/gallery.html',
        controller: 'GalleryController',
        controllerUrl: 'js/controllers/GalleryController.js'
      })
      .state('contacts', {
        url: '/contacts',
        templateUrl: 'partials/contacts.html',
        controller: 'ContactsController',
        controllerUrl: 'js/controllers/ContactsController.js'
      })
      .state('404', {
        url: '/404/',
        templateUrl: 'partials/404.html'
      });

    $urlRouterProvider.otherwise('/#');

    $locationProvider.hashPrefix('!');
    //$locationProvider.html5Mode(true);
  }
]).run(['$rootScope', '$state',
  function ($rootScope, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState) {
      //Check if th user is loggedIn
    });
  }
]);

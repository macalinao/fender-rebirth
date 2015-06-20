angular.module('app', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  });

  $urlRouterProvider.otherwise('/');

})

.controller('HomeCtrl', function($scope) {
});

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
})

.controller('SuiteConfigCtrl', function($scope) {
})

.controller('SuiteCtrl', function($scope) {
  $scope.tasks = ['button blue', 'creates a user'].map(function(e) {
    return {
      title: e,
      status: ['pass', 'fail', null][Math.floor(Math.random() * 3)]
    };
  });
});

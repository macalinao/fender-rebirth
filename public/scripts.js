angular.module('app', ['ui.router', 'ui.ace', 'ui.bootstrap'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl'
  }).state('configure', {
    url: '/configure',
    templateUrl: 'templates/configure.html',
    controller: 'ConfigureCtrl'
  }).state('test', {
    url: '/tests/:id',
    templateUrl: 'templates/test.html',
    controller: 'TestCtrl'
  });

  $urlRouterProvider.otherwise('/');

})

.controller('HomeCtrl', function($scope) {
})

.controller('ConfigureCtrl', function($scope) {
  $scope.files = {};
  $scope.tasks = [];

  $scope.deleteTask = function(i) {
    $scope.tasks.splice(i, 1);
  };

  $scope.addTask = function() {
    if (!$scope.nextTask) {
      return;
    }
    $scope.tasks.push({
      title: $scope.nextTask
    });
    $scope.nextTask = '';
  };

})

.controller('TestCtrl', function($scope, $stateParams) {
  var id = $stateParams.id;

  $scope.test = {
    name: 'User login',
    link: 'http://box123.todocker.com/',
    tasks: ['asdf', 'asddasd', 'asd'].map(function(task) {
      return {
        title: task,
        status: ['pass', 'fail', null][Math.floor(Math.random() * 3)]
      };
    })
  };

  $scope.markTask = function(task, status) {
    task.status = status;
  };

})

.controller('SuiteCtrl', function($scope) {
  $scope.tasks = ['button blue', 'creates a user'].map(function(e) {
    return {
      title: e,
      status: ['pass', 'fail', null][Math.floor(Math.random() * 3)]
    };
  });
});

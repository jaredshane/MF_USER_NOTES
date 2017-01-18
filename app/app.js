const app = angular.module('MyApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/', {
      controller: 'MainCtrl',
      templateUrl: 'partials/main.html'
    })
    .when('/register',{
      controller: 'RegisterCtrl',
      templateUrl: 'partials/register.html'
    })
    .when('/login', {
      controller: 'LoginCtrl',
      templateUrl: 'partials/login.html'
    })
    .when('/new', {
      controller: 'NewCtrl',
      templateUrl: 'partials/new.html'
    })
    .when('/notes', {
      controller: 'NotesCtrl',
      templateUrl: 'partials/notes.html'
    })
    .otherwise ({
      redirectTo: '/'
    })
})

app.controller('MainCtrl', function ($scope) {
  console.log('MainCtrl')
})







// app.controller('ListCtrl', function ($scope, $http){
//   console.log('ListCtrl')
//   $http.get(`list.json`)
//       .then((val) => {
//         console.log("list.json", val.data)
//         $scope.list = val.data.list
//       })
// })

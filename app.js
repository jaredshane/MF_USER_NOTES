const app = angular.module('MyApp', ['ngRoute'])

app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix('')
  $routeProvider
    .when('/register',{
      controller: 'RegisterCtrl',
      templateUrl: 'partials/register.html'
    })
})


app.controller('RegisterCtrl', function ($scope) {
  
})

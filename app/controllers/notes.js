app.controller('NotesCtrl', function ($scope, $http) {
  console.log("NotesCtrl");
  $http.get(`https://mf-user-notes-daf3d.firebaseio.com/.json`)
    .then((val) => {
      let notes = val.data
      console.log(notes.hey)
      $scope.selectedItem = notes.hey
    })
})

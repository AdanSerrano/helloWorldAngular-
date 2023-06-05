angular.module("app", [])
var app = angular.module("app", []);
app.controller("HelloWorldCtrl", function ($scope) {
    $scope.message = "Hello World"
    var whereAreYouDoing = "realizo mando un mensaje 'hola mundo' por primera vez en angular";
    $scope.whereAreYouDoing = whereAreYouDoing;
});


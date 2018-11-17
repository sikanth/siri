
var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "home.htm"
    })
    .when("/red", {
        templateUrl : "newgame.htm"
    })
    .when("/green", {
        templateUrl : "scoreboard.htm"
    })
    .when("/blue", {
        templateUrl : "feedback.htm"
    });
});

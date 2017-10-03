var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/home");

    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "/views/home.html",
            controller: "HomeCtrl"
        })
       .state("about_me", {
            url: "/about_me",
            templateUrl: "/views/about_me.html",
            controller: "AboutMeCtrl"
        })
       .state("other", {
            url: "/other",
            templateUrl: "/views/other.html",
            controller: "OtherCtrl"
        })
       .state("gallery", {
           url: "/gallery",
           templateUrl: "/views/gallery.html",
           controller: "GalleryCtrl"
       });
});
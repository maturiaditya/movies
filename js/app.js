var app = angular.module("MoviesApp", ['ui.bootstrap', 'ui.router']);

/*app.config(function ($routeProvider) {
  $routeProvider
    .when('/nowplayingmovies', {
      controller: "NowPlayingMoviesController",
      templateUrl: "views/nowplayingmovies.html"
    }).when('/nowplayingmovies/:id', {
      controller: "NowPlayingMoviesController",
      templateUrl: "views/nowplayingmovies.html"
    }).when('/topratedmovies', {
      controller: "TopRatedMoviesController",
      templateUrl: "views/topratedmovies.html"
    }).when('/topratedmovies/:id', {
      controller: "TopRatedMoviesController",
      templateUrl: "views/topratedmovies.html"
    }).when('/populartv', {
      controller: "PopularTvController",
      templateUrl: "views/populartv.html"
    }).when('/populartv/:id', {
      controller: "PopularTvController",
      templateUrl: "views/populartv.html"
    }).when('/topratedtv', {
      controller: "TopRatedTvController",
      templateUrl: "views/topratedtv.html"
    }).when('/topratedtv/:id', {
      controller: "TopRatedTvController",
      templateUrl: "views/topratedtv.html"
    }).otherwise({
      redirectTo: '/nowplayingmovies'
    });
});*/

app.config(['$qProvider', function ($qProvider) {
    $qProvider.errorOnUnhandledRejections(false);
}]);

app.config(function ($stateProvider) {
    $stateProvider
        .state('nowplayingmovies', {
            url: "/nowplayingmovies/:id",
            params: {
                id: null
            },
            views: {
                "searchview": {
                    controller: "SearchController",
                    templateUrl: "views/search.html"
                },
                "mainview": {
                    controller: "NowPlayingMoviesController",
                    templateUrl: "views/nowplayingmovies.html"
                }
            }
        }).state('topratedmovies', {
            url: "/topratedmovies/:id",
            params: {
                id: null
            },
            views: {
                "mainview": {
                    controller: "TopRatedMoviesController",
                    templateUrl: "views/topratedmovies.html"
                }
            }
        }).state('populartv', {
            url: "/populartv/:id",
            params: {
                id: null
            },
            views: {
                "mainview": {
                    controller: "PopularTvController",
                    templateUrl: "views/populartv.html"
                }
            }
        }).state('topratedtv', {
            url: "/topratedtv/:id",
            params: {
                id: null
            },
            views: {
                "mainview": {
                    controller: "TopRatedTvController",
                    templateUrl: "views/topratedtv.html"
                }
            }
        });
});

app.controller("MoviesListController", ['$scope',function($scope){
    $scope.panels= [
        {
            title:'NowPlaying',
            url:"nowplayingmovies"
        },
        {
            title:'Top Rated',
            url:"topratedmovies"
        }
    ]
}]);


app.controller("TvShowsListController", ['$scope',function($scope){
    $scope.panels= [
        {
            title:'Popular',
            url:"populartv"
        },
        {
            title:'Top Rated',
            url:"topratedtv"
        }
    ]
}]);
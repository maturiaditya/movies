app.controller('TopRatedMoviesController', ['$scope', 'topratedmovies','$routeParams',
    function ($scope, topratedmovies,$routeParams) {
        $scope.page = $routeParams.id;
        if(isNaN($scope.page)){
           $scope.page=1;
        }
        $scope.getimagePreUrl=function(){
            return getimagePreUrl();
        }
         topratedmovies.topRatedMoviesByPage($scope.page).then(function (success) {
            $scope.movies = success;
        });
}]);


app.controller('PopularTvController', ['$scope', 'movieservice','$routeParams',
    function ($scope, movieservice,$routeParams) {
        $scope.page = $routeParams.id;
        if(isNaN($scope.page)){
           $scope.page=1;
        }
        $scope.getimagePreUrl=function(){
            return getimagePreUrl();
        }
         movieservice.resultsByPage(getPopularTvUrl($scope.page)).then(function (success) {
            $scope.movies = success;
        });
}]);
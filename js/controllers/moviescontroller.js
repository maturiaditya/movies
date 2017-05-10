app.controller('NowPlayingMoviesController', ['$scope', 'movieservice', '$stateParams',
    function ($scope, movieservice,$stateParams) {
        //$scope.page = $routeParams.id;
        if(isNaN($stateParams.id)){
           $stateParams.id=1;
        }
        $scope.getimagePreUrl=function(){
            return getimagePreUrl();
        }
         movieservice.resultsByPage(getNowPlayingMoviesUrl($stateParams.id)).then(function (success) {
            $scope.movies = success;
        });
}]);

app.controller('TopRatedMoviesController', ['$scope', 'movieservice','$stateParams',
    function ($scope, movieservice,$stateParams) {
        if(isNaN($stateParams.id)){
           $stateParams.id=1;
        }
        $scope.getimagePreUrl=function(){
            return getimagePreUrl();
        }
         movieservice.resultsByPage(getTopRatedMoviesUrl($stateParams.id)).then(function (success) {
            $scope.movies = success;
        });
}]);
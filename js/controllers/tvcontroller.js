app.controller('PopularTvController', ['$scope', 'movieservice', '$stateParams',
    function ($scope, movieservice,$stateParams) {
        //$scope.page = $routeParams.id;
        if(isNaN($stateParams.id)){
           $stateParams.id=1;
        }
        $scope.getimagePreUrl=function(){
            return getimagePreUrl();
        }
         movieservice.resultsByPage(getPopularTvUrl($stateParams.id)).then(function (success) {
            $scope.movies = success;
        });
}]);

app.controller('TopRatedTvController', ['$scope', 'movieservice','$stateParams',
    function ($scope, movieservice,$stateParams) {
        if(isNaN($stateParams.id)){
           $stateParams.id=1;
        }
        $scope.getimagePreUrl=function(){
            return getimagePreUrl();
        }
         movieservice.resultsByPage(getTopRatedTvUrl($stateParams.id)).then(function (success) {
            $scope.movies = success;
        });
}]);
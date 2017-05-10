app.controller('SearchController', function ($scope, $http) {
    $scope.searchresults = {};
    $scope.getStringArray = function (val) {
        $http.get(getSearchUrl(val)).then(function (response) {
            $scope.searchresults=response.data.results;
        });
    };
});

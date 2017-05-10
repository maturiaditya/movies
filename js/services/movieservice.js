app.service('movieservice', function ($http) {
    this.resultsByPage = function (url) {
        return $http({
            method: 'GET',
            url: url
        }).then(function (success) {
            return success;
        }, function (error) {
            return error;
        });
    }
});

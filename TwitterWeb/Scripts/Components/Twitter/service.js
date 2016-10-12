angular.module('TwitterTweets.service', []).
service('tweetsService', ['$http', function ($http) {
    this.GetLastHundredTweets = function (username) {
        var request = $http({
            method: 'GET',
            url: '/Home/GetLatestTweetByUserName?name=' + username,
        });
        return (request.then(successCallback, errorCallback));

        function successCallback(response) {
            debugger;
            return response;
        };
        function errorCallback(response) {
            debugger;
            return response;
        };
    };
}]);
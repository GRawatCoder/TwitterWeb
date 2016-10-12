angular.module('TwitterTweets.controllers', []).
controller('tweetsController', ['$scope', 'tweetsService', function ($scope, tweetsService) {
    $scope.UserInfo = {};
    $scope.UserInfo.Username = "";
    $scope.UserInfo.UserTweets = "";
    $scope.UserInfo.GetTweets = function () {
        tweetsService.GetLastHundredTweets($scope.UserInfo.Username)
            .then(function success(response) {
                debugger;
                $scope.UserInfo.UserTweets = response.data;
                console.log(response.data);
            },
            function failure(status) {
                debugger;
                console.log(response);
            });
    };
}]);
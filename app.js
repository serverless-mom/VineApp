/**
 * Created by toby on 10/4/14.
 */


function customersController($scope,$http) {
    $http({
        method: 'GET',
        url: 'json/catVines.json'
    }).success(function(data) {
        $scope.vines = data.data.records; // response data
        $scope.albums = [];
    });
}
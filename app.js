/**
 * Created by toby on 10/4/14.
 */


function customersController($scope,$http) {
    $http({
        method: 'GET',
        url: 'json/customers.json'
    }).success(function(data) {
        $scope.customers = data; // response data
        $scope.albums = [];
    });
}
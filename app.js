/**
 * Created by toby on 10/4/14.
 */
var vineApp = angular.module('vineApp', []);


vineApp.config(function($httpProvider) {
    //Enable cross domain calls
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
});

vineApp.controller('customersController',function($scope,$http){
    $http({method: 'GET', url: 'json/catVines.json'}).
        success(function(data, status, headers, config) {
            $scope.vines = data.data.records;
        }).
        error(function(data, status, headers, config) {
            console.log("Some kind of error when requesting the doc, we got back "+status+data);
        });
});


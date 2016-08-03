/**
 * Created by Navaneeth on 6/27/2016.
 */
var two = angular.module('features',[]);

two.controller('twocontroller',function($scope,pchomefactory1){
    pchomefactory1.files1(function(getresults){
        $scope.showdata=getresults.image;
    });
});
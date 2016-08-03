/**
 * Created by Navaneeth on 6/25/2016.
 */
var mod = angular.module('phonecat',['ui.router','wrongway','features']);


mod.config(['$stateProvider','$urlRouterProvider',function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/');
    $stateProvider.state('/',{url:'/',templateUrl:'./phonelist/pclist.html',controller:"nothing"})
        .state('details',{url:'/:id',templateUrl:'./specifications/pcspecifications.html',controller:"nothing1"})
}]);
mod.controller('nothing',function($scope){

});
mod.controller('nothing1',function($scope){

});
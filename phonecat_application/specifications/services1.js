/**
 * Created by Navaneeth on 6/27/2016.
 */
two.factory('pchomefactory1', ['$http', function ($http) {
    return {
        files1: function (inputs) {
            $http({method: 'GET', url: './imageslide.json'})
                .success(function (data) {
                    inputs(data);
                })
        }
    }
}]);
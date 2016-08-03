/**
 * Created by Navaneeth on 6/25/2016.
 */
one.factory('pchomefactory', ['$http', function ($http) {
    return {
        files: function (inputs) {
            $http({method: 'GET', url: './data.json'})
                .success(function (data) {
                    inputs(data);
                })
        }
    }
}]);

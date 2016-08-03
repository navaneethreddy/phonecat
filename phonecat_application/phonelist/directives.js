/**
 * Created by Navaneeth on 6/25/2016.
 */
one.directive('pcHome', function () {
    return {
        template: '</div><table>' +
        '<tbody dir-paginate="p in showlist | filter:search | itemsPerPage: 2">' +
        '<tr>' +
        '<tr><td><a ui-sref="details({id: p.id})"><img src="{{p.imageUrl}}" class="img-rounded img-responsive" height="70" width="70"/></td></tr></a>' +
        '<td style="font-size: 20px;">{{p.name}}</td></tr>' +
        '<tr><td>{{p.description}}</td>' +
        '</tr>' +
        '</tbody>' +
        '</table>' +
        '</div>'+
        '<ui-view></ui-view>',
        scope: true
    }
});
one.controller('pccontroller', ['$scope', 'pchomefactory', function ($scope, pchomefactory) {
    pchomefactory.files(function (result) {
        $scope.showlist = result.datas;
    })
}]);

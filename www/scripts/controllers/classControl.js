app.controller('classControl', function ($scope, $http, $rootScope) {
    $scope.menu.dir = 'class';
    $scope.menu.header = 'Classement';



    $http.get('http://fcsh.fr/api/widgets/get_sidebar/?sidebar_id=sidebar-1').success(function (response) {

    	$scope.cla = response;
    }).error(function (event) {

               console.log('error: ' + JSON.stringify(event, null, 4));
            });

});

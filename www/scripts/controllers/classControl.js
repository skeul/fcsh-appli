app.controller('classControl', function ($scope, $http, $rootScope, $timeout) {
    $scope.menu.dir = 'class';
    $scope.menu.header = 'Classement';


    $rootScope.loader = 1;
    $http.get('http://fcsh.fr/api/widgets/get_sidebar/?sidebar_id=sidebar-1').success(function (response) {

    	$scope.cla = response;
    	$timeout(function() {$rootScope.loader =0;}, 100);

    }).error(function (event) {

               console.log('error: ' + JSON.stringify(event, null, 4));
            });

});

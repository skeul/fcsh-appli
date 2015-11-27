app.controller('actuControl', function ($scope, $http) {
    $scope.menu.dir = 'actu';
    $scope.menu.header = 'Actualités';



    $http.get('http://fcsh.fr/api/get_posts/?json=get_posts').success(function (response) {

    	$scope.posts = response;
    	console.log("response ======" + JSON.stringify($scope.posts, null, 4));
    }).error(function (event) {

               console.log('error: ' + JSON.stringify(event, null, 4));
            });

});

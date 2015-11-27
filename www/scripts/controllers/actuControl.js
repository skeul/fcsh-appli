app.controller('actuControl', function ($scope, $http) {
    $scope.menu.dir = 'actu';
    $scope.menu.header = 'Actualités';
    $scope.panel = 0;


    $http.get('http://fcsh.fr/api/get_posts/?json=get_posts').success(function (response) {

    	$scope.posts = response;

    	$scope.share_id = function (e) {
    		$scope.the_post = $scope.posts[e];
    		$scope.panel = 1;
   		};


    }).error(function (event) {

               console.log('error: ' + JSON.stringify(event, null, 4));
            });

   





});

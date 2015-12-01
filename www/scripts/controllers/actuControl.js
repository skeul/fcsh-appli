app.controller('actuControl', function ($scope, $http, $rootScope) {
    $scope.menu.dir = 'actu';
    $scope.menu.header = 'Actualités';
    $scope.panel = 0;

    $rootScope.loader = 1;
    $http.get('http://fcsh.fr/api/get_posts/?json=get_posts').success(function (response) {

    	$scope.posts = response;
        $rootScope.loader = 0;
    	$scope.share_id = function (id) {
    		if(id != 0) {
                $scope.the_post = id;
                $scope.panel = 1;
            } else {
                $scope.panel = 0;
            }
                
   		};

        console.log(response);
    }).error(function (event) {

               console.log('error: ' + JSON.stringify(event, null, 4));
            });

   





});

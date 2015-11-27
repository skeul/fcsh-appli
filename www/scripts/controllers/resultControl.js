app.controller('resultControl', function ($rootScope, $scope, $http) {
    $scope.menu.dir = 'result';
    $scope.menu.header = 'Résultat';



    $http.get('http://fcsh.fr/api/get_matches/?json=get_matches&count=1000').success(function (response) {

    	$scope.matches = response;
    }).error(function (event) {

               console.log('error: ' + JSON.stringify(event, null, 4));
            });


    $scope.filtre_comp = function (e) {
                $elem = $(e.currentTarget);

            };



});

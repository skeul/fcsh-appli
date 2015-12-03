    app.controller('adminControl', function ($scope, $http, $rootScope, $timeout) {
        $scope.menu.dir = 'admin';
        $scope.menu.header = 'Administration';

        /*$('input').blur( function() {
        	if($(this).val().length != 0){
        		$(this).next('label').addClass('no_empty');
        	} else  {
        		$(this).next('label').removeClass('no_empty');
        	}

        })*/

        $scope.log = function(){ 
        	if($scope.user != '' && $scope.password != '')
        		$rootScope.loader = 1;
                $timeout(function() {$rootScope.loader =0; }, 500);
       

        };
        
    });

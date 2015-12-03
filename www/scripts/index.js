
document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );


function onDeviceReady() {

    document.addEventListener( 'pause', onPause.bind( this ), false );
    document.addEventListener('resume', onResume.bind(this), false);
    document.addEventListener("offline", deviceOffLine, false);
    document.addEventListener("online", deviceOnLine, false);
};

function onPause() {
// TODO: cette application a été suspendue. Enregistrez l'état de l'application ici.
};

function onResume() {
// TODO: cette application a été réactivée. Restaurez l'état de l'application ici.
};


var app = angular.module('app', ['ngRoute']).run(function($rootScope, $http) {
    $rootScope.menu = {};
    $rootScope.menu.dir = 'home';
    $rootScope.menu.header = 'FCSH';
    $rootScope.loader =0;

    $http.get('http://fcsh.fr/api/get_club/?json=get_club&count=100').success(function (response) {

        $rootScope.club = {};

        for(var i = 0; i <response.posts.length; i++) {
            $rootScope.club[response.posts[i].id] = {   id : response.posts[i].id, 
                                                        title : response.posts[i].title, 
                                                        img : response.posts[i].attachments[0].images.large.url,
                                                        thumb : response.posts[i].attachments[0].images.thumbnail.url,
                                                        alt : response.posts[i].attachments[0].slug
                                                    };
        }

    }).error(function (event) {

           console.log('error: ' + JSON.stringify(event, null, 4));
    });



});



app.config(function ($routeProvider) {
    $routeProvider
        .when('/home', { templateUrl: 'partials/home.html' })
        .when('/actu', { templateUrl: 'partials/actu.html' })
        .when('/admin', { templateUrl: 'partials/admin.html' })
        .when('/class', { templateUrl: 'partials/class.html' })
        .when('/result', { templateUrl: 'partials/result.html' })
        .otherwise({ redirectTo: '/home' });
})



/* perso filter */

angular.module('app').filter('clear', function () {
        return function (value) {
            if (!value) return '';
            var reg=new RegExp("[0-9]+","g");

            value = reg.exec(value);
            return value[0];
        };
    });


angular.module('app').filter('date_format', function ($filter) {
        return function (value, type) {
            if (!value) return '';
           
            if(type != '')   
                var d = $filter('date')(new Date(value), type);
            else
                var d = value;

            return d;
        };
    });

app.filter('convertHtml', function ($sce) {
        return function (value) {
            if (!value ) return '';


                return $sce.trustAsHtml(value);
            
        }
    });


var $page = $('.app');
$page.hammer()
        .on('swiperight', function(e) {
            $(".pusher-container, .nav-menu").addClass('open');
            $("#button-menu").removeClass('closed').addClass('open');
        }) 
        .on('swipeleft', function(e) {
            if($("#button-menu").hasClass('open')) {
                $("#button-menu").removeClass('open').addClass('closed');
                $(".pusher-container, .nav-menu").removeClass('open');
            }

        })

$("#button-menu").on('click touch', function(){
    if($(this).hasClass('open')) {
        $(this).removeClass('open').addClass('closed');
        $(".pusher-container, .nav-menu, .header_text").removeClass('open');
    }
    else {
        $(".pusher-container, .nav-menu, .header_text").addClass('open');
        $(this).removeClass('closed').addClass('open');
    }

})

$(".nav-menu ul li a").on('click touch', function(){
    if($('#button-menu').hasClass('open')) {
        $("#button-menu").removeClass('open').addClass('closed');
        $(".pusher-container, .nav-menu, .header_text").removeClass('open');
    }
   
})
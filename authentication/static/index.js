var authexample =angular.module('moonshine.authexample',["moon.angular","ui.state","user.authentication","user.local"])

authexample.controller("MainCtrl",["Restangular","$scope","authentication",function(Restangular,$scope,authentication){
    $scope.authentication = authentication
}])
authexample.controller("SecuredCtrl",["Restangular","$scope","authentication",function(Restangular,$scope,authentication){
	$scope.user = authentication.user
    $scope.authentication = authentication
}])
authexample.controller("HomeCtrl",["Restangular","$scope","authentication",function(Restangular,$scope,authentication){
	$scope.user = authentication.user
    $scope.authentication = authentication
}])
authexample.config(['$stateProvider','$urlRouterProvider','authenticatedOnly','notForAuthenticated',
    function($stateProvider, $urlRouterProvider,authenticatedOnly,notForAuthenticated){
    $urlRouterProvider.otherwise("/home");
    $stateProvider.state('home',{
        url: "/home",
        templateUrl: 'home.html',
        controller: 'HomeCtrl'
    })
    .state('login',{
        url: "/login",
        templateUrl: 'login.html',
        controller: 'AuthLoginCtrl',
        permission: notForAuthenticated
    })
    .state('logout',{
        url: "/logout",
        templateUrl: 'logout.html',
        controller: 'AuthLogoutCtrl',
        permission: authenticatedOnly
    })
	.state('register',{
        url: "/register",
        templateUrl: 'register.html',
        controller: 'AuthRegisterCtrl'
    })
    .state('secured',{
        url: "/secured",
        templateUrl: 'secured.html',
        controller:'SecuredCtrl',
        permission: authenticatedOnly
    })
}]);
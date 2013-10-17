var authexample =angular.module('moonshine.authexample',["api.moonbridge","ui.state","user.authentication","user.local"])

authexample.controller("MainCtrl",["moonbridge","$scope","authentication",function(moonbridge,$scope,authentication){
    $scope.authentication = authentication
}])
authexample.controller("SecuredCtrl",["moonbridge","$scope","authentication",function(moonbridge,$scope,authentication){
	$scope.user = authentication.user
    $scope.authentication = authentication
}])
authexample.controller("HomeCtrl",["moonbridge","$scope","authentication",function(moonbridge,$scope,authentication){
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
var app = angular.module('app.ctrl',['ngCookies']);

app.controller('home',function($scope,$location,$http,$cookies,$httpParamSerializerJQLike){
	$scope.login = function(){
		$location.path('/login/');
	}
})

app.controller('login',function($scope,$http,$cookies,$httpParamSerializerJQLike,$location,$window){
	console.log("loginA")
	$window.location.href = "https://apiv2.twitcasting.tv/oauth2/authorize?client_id=767274445203308545.ef08e24f32e14d5d4960da1253a8bf7422f38c5dc8ee5152e1579cd3ed8599a0&response_type=token";
})


app.controller('callback',function($scope,$http,$cookies,$httpParamSerializerJQLike,$window,$routeParams,$location){
	param = $routeParams.param;
	params = param.split("&");
	token = params[1].split("=")[1];

	$cookies.put("token",token);
	$location.path('/cruise/');
	
})

app.controller('cruise',function($scope,$http,$cookies,$httpParamSerializerJQLike,$window,$routeParams){
	token = $cookies.get('token');
	console.log(token)
});

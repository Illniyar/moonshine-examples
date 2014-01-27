var todoexample =angular.module('moonshine.todoexample',["moon.angular"])

todoexample.controller("MainCtrl",["Restangular","$scope",function(Restangular,$scope){
	var resource = Restangular.all('lists')
	resource.getList().then(function(lists){
		$scope.lists = lists;
	});
	$scope.addList = function(newList) {
		resource.post(newList).then(function(newResource){
				$scope.lists.push(newResource);
				$scope.currentList = newResource
		})
	}	
}])
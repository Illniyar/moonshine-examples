var todoexample =angular.module('moonshine.todoexample',["api.moonbridge"])

todoexample.controller("MainCtrl",["moonbridge","$scope",function(moonbridge,$scope){
	var resource = moonbridge.all('lists')
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
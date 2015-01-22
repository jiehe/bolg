
define(['../controllers'], function (controllers) {
	controllers.controller('archive', ['$scope','servArchive' ,'$location',function($scope, servArchive,$location) {
		var key = $location.$$path.slice($location.$$path.lastIndexOf('/') + 1);
		$scope['archiveTitle'] = key;
		servArchive.getData(function(data){
				$scope.items = data[key];
			})
	}])
});
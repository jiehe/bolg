
define(['../controllers', 'jquery', 'jCloud'], function (controllers, $) {
	controllers.controller('tagCloud', ['$scope','servArchive', function($scope,servArchive) {
		$scope.name='tagCloud';
		//$http.get("php/openapi/getArticleName.php")
		//	.success(function(data){
		//		$rootScope.tagCloud = data;
		//		var word_list = [];
		//		for(i in data){
		//			var obj ={
		//				"text":i,
		//				"link":{href:"#/index/tagCloud/"+i}
		//			};
		//			word_list.push(obj);
		//		}
		//		$("#tagCloud").jQCloud(word_list);
        //
		//	})
		servArchive.getData(function(data){
			var word_list = [];
			for(i in data){
				var obj ={
					"text":i,
					"link":{href:"#/index/tagCloud/"+i}
				};
				word_list.push(obj);
			}
			$("#tagCloud").jQCloud(word_list);

		})
	}])
});
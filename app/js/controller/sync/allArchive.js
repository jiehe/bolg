
define(['../controllers','jquery'], function (controllers, $) {
	controllers.controller('allArchive', ['$scope','servArchive' ,function($scope, servArchive) {

		var archivesArr = [];
		servArchive.getData(function(data){

			//把所有的archives放进一个数组里面
			$.each(data,function(category, archives){
				$.each(archives,function(key,archive){
					archive.updateTime =  new Date(archive.updateTime.substr(0,10)).getTime();
					archivesArr.push(archive);
				})
			})

			//把archives按时间排序
			archivesArr.sort(function(archive1,archive2){
				return archive2.updateTime - archive1.updateTime;
			})

			console.log(archivesArr);
			})
	}])
});
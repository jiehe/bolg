/**
 * Created by dong on 2015/1/8.
 */
define(['../services'],function(services){
    services.factory('servArchive',['$http',function($http){
        var archive ={};
        archive.getData = function(callBack){
            //只请求一次该接口,提高性能
            if(archive.data){
                callBack(archive.data);
            }else{
                $http.get('php/openapi/getArticleName.php')
                    .success(function(data){
                        archive.data = data;
                        callBack(data);
                    })
            }
        }
        return archive;
    }])
})

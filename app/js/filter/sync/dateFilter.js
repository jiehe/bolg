/**
 * Created by dong on 2015/1/22.
 */
define(['../filters'],function(filters){
    filters.filter('dateFilter',function(){
        return function(string){
            return string.substr(0,10);
        }
    })
})

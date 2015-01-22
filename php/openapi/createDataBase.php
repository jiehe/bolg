<?php
/**
 * Created by PhpStorm.
 * User: dong
 * Date: 2015/1/6
 * Time: 15:23
 */
include '../dependence/connect.php';

if(mysql_query("CREATE DATABASE bolg",$con)){
    echo '成功';
}else{
    echo mysql_error();
}
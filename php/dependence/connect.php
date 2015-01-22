<?php
/**
 * Created by PhpStorm.
 * User: dong
 * Date: 2015/1/6
 * Time: 15:01
 */
$con = mysql_connect("localhost","root","a6605659A");
if (!$con)
{
    die('Could not connect: ' . mysql_error());
}
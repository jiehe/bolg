<?php
header("Content-type: text/html; charset=utf-8");

$dir = "../../app/tpl/article/";  //要获取的目录
// "********** 获取目录下所有文件和文件夹 ***********<hr/>";
//先判断指定的路径是不是一个文件夹
if (is_dir($dir)) {
	if ($dh = opendir($dir)) {
		while (($file = readdir($dh)) == true) {

			if ($file === "." || $file === "..") continue;
			//文件名的全路径 包含文件名
			$filePath = $dir . $file;
			$content = file_get_contents($filePath); //读取文件中的内容
			//获取类型
			$start = strpos($content, '<code>')+6;
			$end = strpos($content, '</code>');
			$num = $end - $start;
			$type = substr($content, $start, $num);
			//获取标题
			$start = strpos($content, 'data-anchor-id');
			$start = strpos($content, '>',$start)+1;
			$end = strpos($content, '</',$start);
			$num = $end - $start;
			$title = substr($content, $start, $num);
			//获取文件修改时间
			$fmt = filemtime($filePath);
			$date = date("Y-m-d H:i:s",$fmt);
			//获取文件名称前缀
            $fileName =strstr($file,'.html',true);

			$arrType[$type][] =array("title"=>$title,"updateTime"=>$date,"fileName"=>$fileName);
		}

		echo json_encode($arrType, JSON_HEX_TAG | JSON_HEX_APOS | JSON_HEX_QUOT | JSON_HEX_AMP | JSON_UNESCAPED_UNICODE);
//		var_dump($arrType);
		closedir($dh);
	}
}
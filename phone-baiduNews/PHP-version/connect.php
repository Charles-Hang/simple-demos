<?php
	function connect(){
		header('Content-Type: text/json;charset=utf-8');
		header("Content-Security-Policy: default-src 'self'");
		$con = mysql_connect('localhost','root','');
		if (!$con){
			die('Could not connect: ' . mysql_error());
		}
		mysql_query('set character set "utf8"');
		mysql_query('set names "utf8"');
		mysql_select_db('news',$con);
		return $con;
	}
?>
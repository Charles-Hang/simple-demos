<?php 
	require_once('connect.php');
	$con = connect();
	$i = 0;
	$type = $_GET['type'];
	$page = $_GET['page'] * 8;
	$j = $i + $page;
	$sql = "SELECT * FROM $type LIMIT $j,8";
	$query = mysql_query($sql);
	while ($row = mysql_fetch_assoc($query)) {
		$data[] = $row;
	}
	echo json_encode($data, JSON_UNESCAPED_UNICODE);	
	mysql_close($con);
 ?>

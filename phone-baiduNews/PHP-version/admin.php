<?php 
	require_once('connect.php');
	$con = connect();
	$type = $_GET['type'];
	$sql = "SELECT * FROM $type";
	$query = mysql_query($sql);
	while ($row = mysql_fetch_assoc($query)) {
		$data[] = $row;
	}
	echo json_encode($data, JSON_UNESCAPED_UNICODE);
	mysql_close($con);
?>
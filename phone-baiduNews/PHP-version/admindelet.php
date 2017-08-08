<?php 
	require_once('connect.php');
	$con = connect();
	session_start();
	if ($_SERVER['REQUEST_METHOD'] == 'POST' and (! isset($_POST['token']) || $_POST['token'] == $_SESSION['token'])) {
		$newsType = $_POST['newsType'];
		$id = $_POST['id'];
		$sql = "SELECT * FROM $newsType";
		$query = mysql_query($sql);
		mysql_query("DELETE FROM $newsType WHERE id = $id");
		echo '删除成功！';	
	}else{
		echo '错误';
	}
	mysql_close($con);
?>
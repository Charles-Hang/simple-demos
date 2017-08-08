<?php 
	require_once('connect.php');
	$con = connect();
	session_start();
	if ($_SERVER['REQUEST_METHOD'] == 'POST' and (! isset($_POST['token']) || $_POST['token'] == $_SESSION['token'])) {
		$newsType = $_POST['newsType'];
		$sql = "SELECT * FROM $newsType";
		$query = mysql_query($sql);
		if ($newsType != 'image') {
			$id = $_POST['id'];
			$title = $_POST['title'];
			$des = $_POST['description'];
			$img1 = $_POST['img1'];
			$img2 = $_POST['img2'];
			$img3 = $_POST['img3'];
			$url = $_POST['url'];
			$time = $_POST['time'];
			$type = $_POST['type'];
			$title = htmlspecialchars($title);
			$des = htmlspecialchars($des);
			$img1 = htmlspecialchars($img1);
			$img2 = htmlspecialchars($img2);
			$img3 = htmlspecialchars($img3);
			$url = htmlspecialchars($url);
			$time = htmlspecialchars($time);
			$type = htmlspecialchars($type);
			$title = addslashes($title);
			$des = addslashes($des);
			$img1 = addslashes($img1);
			$img2 = addslashes($img2);
			$img3 = addslashes($img3);
			$url = addslashes($url);
			$time = addslashes($time);
			$type = addslashes($type);
			mysql_query("UPDATE $newsType SET title = '".$title."', description = '".$des."', img1 = '".$img1."', img2 = '".$img2."', img3 = '".$img3."', url = '".$url."', time = '".$time."', type ='".$type."' WHERE id = $id");
			echo $title;	
		}
		if ($newsType == 'image') {
			$id2 = $_POST['id'];
			$title2 = $_POST['title'];
			$img = $_POST['img'];
			$url2 = $_POST['url'];
			$praise = $_POST['praise'];
			$title2 = addslashes($title2);
			$img = addslashes($img);
			$url2 = addslashes($url2);
			$praise = addslashes($praise);
			$title2 = htmlspecialchars($title2);
			$img = htmlspecialchars($img);
			$url2 = htmlspecialchars($url2);
			$praise = htmlspecialchars($praise);
			mysql_query("UPDATE $newsType SET title = '".$title2."', img = '".$img."', url = '".$url2."', praise = '".$praise."' WHERE id = $id2");
			echo '修改成功！';
		}
	}else{
		echo '错误';
	}
	mysql_close($con);
?>
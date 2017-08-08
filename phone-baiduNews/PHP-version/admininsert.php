<?php 
	require_once('connect.php');
	$con = connect();
	session_start();
	if ($_SERVER['REQUEST_METHOD'] == 'POST' and (! isset($_POST['token']) || $_POST['token'] == $_SESSION['token'])) {
		$newsType = $_POST['newsType'];
		$sql = "SELECT * FROM $newsType";
		$query = mysql_query($sql);
		if ($newsType != 'image') {
			$title = $_POST['title'];
			$des = $_POST['description'];
			$img1 = $_POST['img1'];
			$img2 = $_POST['img2'];
			$img3 = $_POST['img3'];
			$url = $_POST['url'];
			$time = $_POST['time'];
			$type = $_POST['type'];
			$title = addslashes($title);
			$des = addslashes($des);
			$img1 = addslashes($img1);
			$img2 = addslashes($img2);
			$img3 = addslashes($img3);
			$url = addslashes($url);
			$time = addslashes($time);
			$type = addslashes($type);
			$title = htmlspecialchars($title);
			$des = htmlspecialchars($des);
			$img1 = htmlspecialchars($img1);
			$img2 = htmlspecialchars($img2);
			$img3 = htmlspecialchars($img3);
			$url = htmlspecialchars($url);
			$time = htmlspecialchars($time);
			$type = htmlspecialchars($type);
			mysql_query("INSERT INTO $newsType (title, description, url, img1, img2, img3, time, type) VALUES ('".$title."', '".$des."', '".$url."', '".$img1."', '".$img2."', '".$img3."', '".$time."', '".$type."')");
			echo '插入成功！';	
		}
		if ($newsType == 'image') {
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
			mysql_query("INSERT INTO $newsType (title, url, img, praise) VALUES ('".$title2."', '".$url2."', '".$img."', '".$praise."')");
			echo '插入成功！';
		}
	}else{
		echo '错误';
	}
	mysql_close($con);
?>
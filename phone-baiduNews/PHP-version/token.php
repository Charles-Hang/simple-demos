<?php
	session_start();

	$token = base64_encode(openssl_random_pseudo_bytes(32));
	$_SESSION['token'] = $token;
	echo $token;
?>
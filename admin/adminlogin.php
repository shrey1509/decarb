<?php
	session_start();
	include '../database/connect.php';
	$tablename = "admin";
	$username = $_POST['username'];
	$password = md5($_POST['password']);
	$sql = "SELECT * FROM $tablename WHERE username = '$username' AND password = '$password'";
	$result = $conn->query($sql);
	if($result->num_rows == 1) 
		{
			$_SESSION['username'] = $username;
			header("Location: dashboard.php");
		}
	else
		{
			echo "Invalid";
		}


?>
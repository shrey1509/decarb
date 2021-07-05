<?php
	include '../database/connect.php';
	$tablename = "gallery";
	$uploadDestinationPath = '..\gallery\\'.basename($_FILES["image"]["name"]);
	move_uploaded_file($_FILES['image']['tmp_name'], $uploadDestinationPath);
	$databaseDestinationPath = 'gallery/'.basename($_FILES["image"]["name"]);
	$sql = "INSERT INTO $tablename (location) VALUES('$databaseDestinationPath')";
	if($conn->query($sql))
	{
		header("Location: dashboard.php");
	}
	else
	{
		echo($conn-> error);
	}

?>
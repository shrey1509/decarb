<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Decarb</title>
	<?php include 'components/linksAndScripts.php'; ?>
	<?php include 'database/connect.php'; ?>

</head>
<body>
	<div class="spinner-wrapper">
	    <video autoplay muted loop id="myVideo">
			<source src="images/preloader.mp4" type="video/mp4">
		</video>
	</div>
	<?php include 'components/header.php'; ?>
	<?php include 'pages/hero.php'; ?>
	<?php include 'pages/about.php'; ?>
	<?php include 'pages/why.php'; ?>
	<?php include 'pages/how.php'; ?>
	<?php include 'pages/gallery.php'; ?>
	<?php include 'pages/enquiry.php'; ?>
	<?php include 'components/footer.php'; ?>
</body>
	<script src="animations/preLoader.js"></script>
	<script src="animations/header.js"></script>
	<script src="animations/hero.js"></script>
	<script src="animations/about.js"></script>
	<script src="animations/why.js"></script>
	<script src="animations/how.js"></script>
	<script src="animations/enquiry.js"></script>
	<script src="animations/gallerySwiper.js"></script>
	<script src="animations/footer.js"></script>
</html>
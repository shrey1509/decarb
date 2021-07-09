<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
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
	<?php include 'pages/enquiry.php'; ?>
	<?php include 'pages/gallery.php'; ?>
	<?php include 'components/footer.php'; ?>
</body>
	<script src="animations/preLoader.js"></script>
	<script src="animations/header.js"></script>
	<script src="animations/why.js"></script>
	<script src="animations/gallerySwiper.js"></script>
	<script type="text/javascript">
				
		function toggleTimes(){
			$(".togglebars").css({"display": "none"});
			$(".toggletimes").css({"display": "block"});
		}

		function toggleBars(){
			$(".toggletimes").css({"display": "none"});
			$(".togglebars").css({"display": "block"});
		}

	</script>
</html>
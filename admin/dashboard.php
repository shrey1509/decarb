<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Dashboard</title>
	<?php include '../components/linksAndScripts.php'; ?>
</head>
<body>
	<nav class="navbar navbar-expand-sm bg-light navbar-light">
	  <ul class="navbar-nav">
	    <li class="nav-item active">
	      <a class="nav-link" href="#">Admin Dashboard</a>
	    </li>
	    <li class="nav-item" style="margin-left: 80rem;margin-top: 1rem;">
	    	<form action="adminlogout.php">
	    		 <button type="submit" value="Logout">Logout</button>
	    	</form>
	    </li>
	  </ul>
	</nav>
	<div class="offset-md-3 col-md-6 offset-md-3">
        <h2>Add Image to Gallery</h2>

        <form action="upload.php" method="post" enctype="multipart/form-data">

          <div class="container">
            <div class="row" >
                <input type="file" required class="form-control" id="fileToUpload" name="image" style="margin-top:2rem" />
            </div> 
            <div class="row">
                <button class="btn-primary" type="submit" style="margin-top:2rem">Upload</button>
            </div> 
          </div>

        </form>
    </div>
</body>
</html>
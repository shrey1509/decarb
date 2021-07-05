<div class="gallery" id="gallery">
	<embed src=
        "<?php 
        	$tablename = "gallery";
        	$sql = "SELECT * FROM $tablename";
        	$result = $conn->query($sql);
            while ($row=$result->fetch_assoc()) {
            	echo ($row['location']);  
            }
                    ?>" width="500px" height="500px" /> 
</div>
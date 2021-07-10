<?php 
    $tablename = "gallery";
    $sql = "SELECT * FROM $tablename";
    $result = $conn->query($sql);
?>

<div class="gallery" id="gallery">
    <div class="container">
        <div class="row title-head">
            <div class="gear">
                <img class="gear-img" src="images/light-gear.svg" alt="gear">
            </div>
            <div class="col-md-4 gallery-title">
                <h1>Gallery</h1>
            </div>
            <div class="offset-md-2 col-md-6 line">
            </div>
        </div>
    </div>
    <div class="swiper-container mySwiper">
      <div class="swiper-wrapper"> 
        <?php while ($row=$result->fetch_assoc()) { ?>  
        <div class="swiper-slide">
             <img src="<?php echo ($row['location']); ?>" />

        </div>
         <?php } ?>
      </div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-pagination"></div>
    </div>
</div>
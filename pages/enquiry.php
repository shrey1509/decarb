<div class="enquiry" id="enquiry">
	<div class="container"></div>
		<div class="row title-head">
			<div class="gear">
				<img src="images/dark-gear.svg" alt="gear">
			</div>
			<div class="offset-md-4 col-md-3 enquiry-title">
				<h1>Contact us</h1>
			</div>
			<div class="offset-md-6 col-md-3 line">
			</div>
		</div>
		<div class="row">
			<div class=" form-title offset-md-6 col-md-5">
				<h4>Please fill in this form so we can contact you</h4>
			</div>
		</div>
		<form action="admin/contactupload.php" method="POST">
			<div class="contact-fields row">
				<div class=" offset-md-6 col-md-3 offset-md-1 form-group">
				  <label for="name">Full Name:</label>
				  <input type="text" class="contact-input form-control" name="name" id="name">
				</div>
			</div>
			<div class="contact-fields row">
				<div class=" offset-md-6 col-md-2 form-group">
				  <label for="phone">Phone Number:</label>
				  <input type="text" class="contact-input form-control" name="phone" id="phone">
				</div>
				<div class=" col-md-3  form-group">
				  <label for="email">Email:</label>
				  <input type="text" class="contact-input form-control" name="email" id="email">
				</div>

			</div>
			<div class="contact-fields row">
				<div class=" offset-md-6 col-md-3 form-group">
				  <label for="car">Car Name/Model:</label>
				  <input type="text" class="contact-input form-control" name="car" id="car">
				</div>
				<div class=" col-md-2  form-group">
				  <label for="cc">Engine CC:</label>
				  <input type="text" class="contact-input form-control" name="cc" id="cc">
				</div>
			
			</div>
			<div class="contact-fields row">
				<div class="offset-md-8 col-md-2">
					<button type="submit" class="btn enquiry-link" name="submit" id="enquiry-link">Enquiry</button>
				</div>
			</div>
		</form>
	</div>
</div>
<div class="enquiry" id="enquiry">
	<div class="container">
		<div class="row">
			<div class="gear enquiry-gear">
				<img class="gear-img" src="images/dark-gear.svg" alt="gear">
				
				<div class="enquiry-title">
					<h1>Contact Us</h1>
					<div class="line"></div>
				</div>
				

			</div>
		</div>
		<div class="row enquiry-content">
			<div class=" form-title" id="content-title">
				<h4>Please fill in this form so we can contact you</h4>
			</div>
		</div>
		<form action="admin/contactupload.php" method="POST">
			<div class="contact-fields row">
				<div class="form-group" id="content-field-1">
				  <label for="name">Full Name:</label>
				  <input type="text" class="contact-input form-control" name="name" id="name">
				</div>
			</div>
			<div class="contact-fields row">
				<div class="form-group" id="content-field-2">
				  <label for="phone">Phone Number:</label>
				  <input type="text" class="contact-input form-control" name="phone" id="phone">
				</div>
				<div class="form-group" id="content-field-3">
				  <label for="email">Email:</label>
				  <input type="text" class="contact-input form-control" name="email" id="email">
				</div>

			</div>
			<div class="contact-fields row">
				<div class="form-group" id="content-field-4">
				  <label for="car">Car Name/Model:</label>
				  <input type="text" class="contact-input form-control" name="car" id="car">
				</div>
				<div class="form-group" id="content-field-5">
				  <label for="cc">Engine CC:</label>
				  <input type="text" class="contact-input form-control" name="cc" id="cc">
				</div>
			
			</div>
			<div class="contact-fields row">
				<div class=" submit-button" id="content-field-6">
					<button type="submit" class="btn enquiry-link" name="submit" id="submit-link">Submit</button>
				</div>
			</div>
		</form>
	</div>
</div>
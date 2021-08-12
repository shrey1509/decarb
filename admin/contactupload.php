<?php
	include '../database/connect.php';
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\SMTP;
	use PHPMailer\PHPMailer\Exception;
	require '../vendor/autoload.php';
	$tablename = "contactinfo";
	$name=$_POST['name'];
	$phone=$_POST['phone'];
	$email=$_POST['email'];
	$car=$_POST['car'];
	$cc=$_POST['cc'];
	$sql = "INSERT INTO $tablename (fullName,phoneNo,email,carName,engineCC) VALUES('$name','$phone','$email','$car','$cc')";

	$mail = new PHPMailer(true);

	try {
	    $mail->SMTPDebug = 1;                     
	    $mail->isSMTP();                                           
	    $mail->Host       = 'smtp.gmail.com';                 
	    $mail->SMTPAuth   = true;
                                   
	    $mail->Username   = '';                    
	    $mail->Password   = '';                              
	    $mail->SMTPSecure = 'tls';           
	    $mail->Port       = 587;                                   
	    
	    $mail->From = "decarb.service@gmail.com";
		$mail->FromName = "Decarb enquiry";
	    $mail->addAddress('decarb.service@gmail.com');              

	    $mail->isHTML(true);                                  
	    $mail->Subject = 'New Enquiry';
	    $mail->Body    = '<b>Name:</b>'.$name.'<br><b>Phone:</b>'.$phone.'<br><b>Email:</b>'.$email.'<br><b>Car Model:</b>'.$car.'<br><b>Engine CC:</b>'.$cc;
	    $mail->send();
	    echo 'Message has been sent';
	} catch (Exception $e) {
	    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
	}

	if($conn->query($sql))
	{
		header("Location: ../index.php");
	}
	else
	{
		echo($conn-> error);
	}

?>

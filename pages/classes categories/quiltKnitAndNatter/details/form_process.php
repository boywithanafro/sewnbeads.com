<?php

$user_current_url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

$subject = "SewBeads email, Website";
$text = 'Persons Email: ' .$_POST['user_email'] ."\n"
	   ."Person's Name: " .$_POST['user_name'] ."\n"
	   ."Person's Url: " .$user_current_url ."\n"
	   .'User Comment: ' ."\n"."\n"
	   .$_POST['user_comments'];
$to = "sewbeads45@gmail.com";
$headers = 'From: SewBeads Website';


mail ($to,$subject,$text,$headers);
echo "Your Message has been sent, Sew'n'Beads will reply as soon as possible. Thank you for your enquiry!<br><br>Click <a href='http://www.sewnbeads.com'>here</a> to return to Sewnbeads.com!";

?>
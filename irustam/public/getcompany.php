<?php
include "config.php";

$condition = "1";
if(isset($_GET['tag'])){
   $condition = " id=".$_GET['tag'];
}
$userData = mysqli_query($con,"select * from company WHERE ".$condition);

$response = array();

while($row = mysqli_fetch_assoc($userData)){

   $response[] = $row;
}

echo json_encode($response);
exit;
<?php
$host = "localhost"; /* Host name */
$user = "u0345666_angular"; /* User */
$password = "L0v2C7u9"; /* Password */
$dbname = "u0345666_angular"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
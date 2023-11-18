<?php
$server_name = "localhost";
$username = "your_username";
$password = "your_password";
$database_name = "your_db_name";

$conn = new mysqli($server_name, $username, $password, $database_name);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>

<?php
require('../db/db_connect.php');
$info = json_decode(file_get_contents("php://input"));
if(count($info) > 0) {
        $name = mysqli_real_escape_string($conn, $info->names);
        $price = mysqli_real_escape_string($conn, $info->prices);
        $company = mysqli_real_escape_string($conn, $info->companies);
        $description = mysqli_real_escape_string($conn, $info->descriptions);
        $query = "INSERT INTO Products(names, prices, companies, descriptions) VALUES ('$name', '$price', '$company', '$description')";
        if(mysqli_query($conn, $query)) {
                echo "Insert Data Successfully";
        }
        else {
                echo "Failed";
        }
}
?>

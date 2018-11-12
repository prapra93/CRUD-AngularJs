<?php
require('../db/db_connect.php');
$data    = json_decode(file_get_contents("php://input"));
if (count($data) > 0) {
    $name     = mysqli_real_escape_string($conn, $data->names);
    $price    = mysqli_real_escape_string($conn, $data->prices);
    $company      = mysqli_real_escape_string($conn, $data->companies);
    $description = mysqli_real_escape_string($conn, $data->descriptions);
    $btn_name = $data->btnName;
    if ($btn_name == 'Update') {
        $id    = $data->idproducts;
        $query = "UPDATE Products SET names = '$name', prices = '$price', companies = '$company', descriptions = '$description' WHERE idproducts = '$id'";
        if (mysqli_query($conn, $query)) {
            echo 'Updated Successfully...';
        } else {
            echo 'Failed';
        }
    }
}
?>

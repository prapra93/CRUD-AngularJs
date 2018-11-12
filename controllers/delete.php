<?php
 require('../db/db_connect.php');
 $info = json_decode(file_get_contents("php://input"));
 if(count($info) > 0) {
      $id = $info->idproducts;
      $query = "DELETE FROM Products WHERE idproducts='$id'";
      if(mysqli_query($conn, $query)) {
           echo 'You data has successfully been deleted..';
      } else {
           echo 'Failed';
      }
 }
 ?>

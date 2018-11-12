<?php
require('../db/db_connect.php');
$query = "select * from Products order by idproducts";
$result = $conn->query($query) or die($conn->error . __LINE__);
$fetch_data = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $fetch_data[] = $row;
    }
}
$jResponse = json_encode($fetch_data);
echo $jResponse;

?>

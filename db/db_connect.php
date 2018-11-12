<?php
$conn = mysqli_connect("srvwebdev","root", "hgf83nkl", "AngularPV", 3306 );
if ($conn->connect_errno) {
    echo "Echec lors de la connexion à MySQL : (" . $conn->connect_errno . ") " . $conn->connect_error;
}

//echo $conn->host_info . "\n";

/*if (!$conn->set_charset("utf8")) {
    printf("Erreur lors du chargement du jeu de caractères utf8 : %s\n", $conn->error);
    exit();
} else {
    printf("Jeu de caractères courant : %s\n", $conn->character_set_name());
}

$conn->close();*/

?>

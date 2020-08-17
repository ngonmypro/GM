<?php session_start();
    include "../../Connections/connect_mysql.php";

    session_destroy();

    echo "Y";
?>

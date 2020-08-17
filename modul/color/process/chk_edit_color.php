<?php include "../../../Connections/connect_mysql.php";
  session_start();
  set_time_limit(0);
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];


    $sql_edit = " UPDATE tbl_typecolor SET TCOL_NAME = '".$_POST['name_color']."' , TCOL_UPDATEBY = '{$name}' , TCOL_UPDATETIME = NOW() WHERE TCOL_ID = '".$_POST['colorid']."'";
    $result_edit = mysql_query($sql_edit) or die(mysql_error());

    echo "Y";
  ?>

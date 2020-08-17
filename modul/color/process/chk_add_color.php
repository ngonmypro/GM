<?php include "../../../Connections/connect_mysql.php";
  session_start();
  set_time_limit(0);
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];

  $sql_add = " INSERT INTO tbl_typecolor (TCOL_NAME, TCOL_CREATEBY, TCOL_CREATETIME) VALUES ('".$_POST['name_color']."','{$name}',NOW())";
  $result_add = mysql_query($sql_add)or die(mysql_error());
  $lastid = mysql_insert_id();
  
  echo "Y,{$lastid}";

   ?>

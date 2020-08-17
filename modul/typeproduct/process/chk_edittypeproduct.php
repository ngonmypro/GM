<?php include "../../../Connections/connect_mysql.php";
  session_start();
  set_time_limit(0);
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];
  //echo $_POST['name_typeproduct'];
  $sql_edit = " UPDATE tbl_typeproduct SET TPRO_NAME = '".$_POST['name_typeproduct']."' , TPRO_UPDATEBY = '{$name}' , TPRO_UPDATETIME = NOW() WHERE TPRO_ID = '".$_POST['typroid']."'";
  $result_edit = mysql_query($sql_edit)or die(mysql_error());

  echo "Y";
?>

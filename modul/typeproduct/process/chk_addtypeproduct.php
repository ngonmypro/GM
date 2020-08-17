<?php include "../../../Connections/connect_mysql.php";
  session_start();
  set_time_limit(0);
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];
  //echo $_POST['name_typeproduct'];
  $sql_add = "INSERT INTO tbl_typeproduct (TPRO_NAME, TPRO_CREATEBY, TPRO_CREATETIME)";
  $sql_add .= "VALUES('".$_POST['name_typeproduct']."', '{$name}', NOW())";
  $result_add = mysql_query($sql_add)or die(mysql_error());

  echo "Y";
?>

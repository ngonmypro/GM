<?php  session_start();
	include "../../../Connections/connect_mysql.php";
  $type_product = $_POST['type_product'];
  $name__product = $_POST['name__product'];
  $detail_product = $_POST['detail_product'];
  $site_product = $_POST['site_product'];
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];

  $sql_add = "INSERT INTO tbl_product (PRO_NAME, PRO_DETAIL, PRO_SITE, PRO_TPROID, PRO_CREATEBY, PRO_CREATETIME)";
  $sql_add  .= "VALUES('{$name__product}', '{$detail_product}', '{$site_product}', '{$type_product}', '{$name}', NOW())";
  $result_add = mysql_query($sql_add)or die(mysql_error());

  echo "Y";

  ?>

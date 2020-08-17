<?php  session_start();
	include "../../../Connections/connect_mysql.php";
  $type_product = $_POST['type_product'];
  $name__product = $_POST['name__product'];
  $detail_product = $_POST['detail_product'];
  $site_product = $_POST['site_product'];
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];
//echo $site_product;
	$sql_edit = " UPDATE tbl_product SET PRO_NAME = '{$name__product}' , PRO_DETAIL = '{$detail_product}' , PRO_SITE = '{$site_product}' , PRO_TPROID = '{$type_product}' , PRO_UPDATEBY = '{$name}' , PRO_UPDATETIME = NOW() WHERE PRO_ID = '".$_POST['proid']."'";
  $result_edit = mysql_query($sql_edit)or die(mysql_error());

  echo "Y";

  ?>

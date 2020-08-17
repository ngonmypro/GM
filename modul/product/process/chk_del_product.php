<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);

      $sql_del_product = "DELETE FROM `tbl_product` WHERE `PRO_ID` = '".$_POST['proid']."'";
      $result_del_product = mysql_query($sql_del_product) or die(mysql_error());

      $sql_del_product2 = "DELETE FROM `tbl_imges` WHERE `IMG_PROID` = '".$_POST['proid']."'";
      $result_del_product2 = mysql_query($sql_del_product2) or die(mysql_error());

      $sql_del_product3 = "DELETE FROM `tbl_coloritem` WHERE `CLI_PROID` = '".$_POST['proid']."'";
      $result_del_product3 = mysql_query($sql_del_product3) or die(mysql_error());

      echo "Y";

    mysql_close($c);
?>

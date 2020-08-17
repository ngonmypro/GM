<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);

      $sql_del_use = "DELETE FROM `tbl_user` WHERE `USE_ID` = '".$_POST['use_id']."'";
      $result_del_use = mysql_query($sql_del_use) or die(mysql_error());

      echo "Y";

    mysql_close($c);
?>

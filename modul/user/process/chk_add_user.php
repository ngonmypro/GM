<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
$name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];

  $add_user_user = $_POST['add_user_user'];
  $add_user_password = $_POST['add_user_password'];
  $add_user_name = $_POST['add_user_name'];
  $add_user_lname = $_POST['add_user_lname'];

  $sql_se_use = "SELECT * FROM `tbl_user` WHERE `USE_USER` = '{$add_user_user}'";
  $result_se_use = mysql_query($sql_se_use) or die(mysql_error());
    if (mysql_num_rows($result_se_use) != 0) {
      echo "N";
    }else {
      $sql_add_use = " INSERT INTO `tbl_user` (`USE_USER`,`USE_PASS`,`USE_NAME`,`USE_LNAME`,`USE_CREATEBY`,`USE_CREATETIME`)";
      $sql_add_use .= "VALUES('{$add_user_user}','{$add_user_password}','{$add_user_name}','{$add_user_lname}','{$name}',NOW())";
      $result_add_use = mysql_query($sql_add_use) or die(mysql_error());

      echo "Y";
    }

    mysql_close($c);
?>

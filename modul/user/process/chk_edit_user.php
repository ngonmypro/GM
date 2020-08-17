<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
  $name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];
    $edit_user_name = $_POST['edit_user_name'];
    $edit_user_lname  = $_POST['edit_user_lname'];
    $edit_user_user = $_POST['edit_user_user'];
    $edit_user_password = $_POST['edit_user_password'];
    $use_id = $_POST['use_id'];

      $sql_edit_use = "UPDATE `tbl_user` SET `USE_USER` = '{$edit_user_user}' , `USE_PASS` = '{$edit_user_password}', `USE_NAME` = '{$edit_user_name}' ,
      `USE_LNAME` = '{$edit_user_lname}' , `USE_UPDATEBY` = '{$name}' , `USE_UPDATETIME` = NOW() WHERE `USE_ID` = '{$use_id}'";
      $result_edit_use = mysql_query($sql_edit_use) or die(mysql_error());

      echo "Y";

    mysql_close($c);
?>

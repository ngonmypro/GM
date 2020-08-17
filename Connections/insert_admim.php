<?php
include "connect_mysql.php";

$sql_s1 = "SELECT * FROM tbl_user";
$result_s1 = mysql_query($sql_s1) or die(mysql_error());
if (mysql_num_rows($result_s1)==0){

  $sql1 = " INSERT INTO  `tbl_user` ( ";
  $sql1 .= " `USE_USER` , ";
  $sql1 .= " `USE_PASS` , ";
  $sql1 .= " `USE_NAME` , ";
  $sql1 .= " `USE_LNAME` , ";
  $sql1 .= " `USE_CREATEBY` , ";
  $sql1 .= " `USE_CREATETIME` ";
  $sql1 .= " ) ";
  $sql1 .= " VALUES ('admin',  'admin123456',  'Admini', 'Strator', 'Admini Strator', NOW()); ";
  $result1 = mysql_query($sql1) or die(mysql_error());
}
mysql_close($c);

?>

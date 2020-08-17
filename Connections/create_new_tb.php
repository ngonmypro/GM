<?
include "connect_mysql.php";

//มี
$sql1 = " CREATE TABLE IF NOT EXISTS `tbl_banner` ( ";
$sql1 .= " `BNN_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID แบนเนอร์' , "; //id
$sql1 .= " `BNN_NAME` varchar(200) NOT NULL COMMENT 'ชื่อ' , ";
$sql1 .= " `BNN_IMG` varchar(100) NOT NULL COMMENT 'รูป' , ";
$sql1 .= " `BNN_CREATEBY` varchar(200) NOT NULL COMMENT 'สร้างโดย' , "; //user *
$sql1 .= " `BNN_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
$sql1 .= " `BNN_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
$sql1 .= " `BNN_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
$sql1 .= " `BNN_STATUS` tinyint(4) NOT NULL default '1' COMMENT 'สถานะ 1.ใช้งานปกติ 0.ยกเลิกใช้งาน' , ";
$sql1 .= " INDEX(BNN_ID, BNN_NAME) ";
$sql1 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางแบนเนอร์' COLLATE utf8_general_ci ";

 $create_tb1 = mysql_query($sql1) or die(mysql_error());


 //มี
 $sql2 = " CREATE TABLE IF NOT EXISTS `tbl_coloritem` ( ";
 $sql2 .= " `CLI_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID_สีผูสินค้า' , "; //id
 $sql2 .= " `CLI_PROID` int(11) NOT NULL COMMENT 'IDสอนค้า' , ";
 $sql2 .= " `CLI_TCOLID` int(11) NOT NULL COMMENT 'ID สีสินค้า' , ";
 $sql2 .= " `CLI_CREATEBY` varchar(200) NOT NULL COMMENT 'สร้างโดย' , ";
 $sql2 .= " `CLI_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
 $sql2 .= " `CLI_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
 $sql2 .= " `CLI_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
 $sql2 .= " `CLI_STATUS` tinyint(1) NOT NULL default '1' COMMENT 'สถานะ 1.ใช้งานปกติ 0.ยกเลิกใช้งาน' , ";
 $sql2 .= " INDEX(CLI_ID, CLI_PROID, CLI_TCOLID) ";
 $sql2 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางสีผูกสินค้า' COLLATE utf8_general_ci ";

 $create_tb2 = mysql_query($sql2) or die(mysql_error());


 //มี
 $sql3 = " CREATE TABLE IF NOT EXISTS `tbl_imges` ( ";
 $sql3 .= " `IMG_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID รูป' , "; //id
 $sql3 .= " `IMG_PROID` int(11) NOT NULL COMMENT 'ID สินค้า' , ";
 $sql3 .= " `IMG_NAME` varchar(200) NOT NULL COMMENT 'ชื่อไฟล์' , ";
 $sql3 .= " `IMG_PHOTO` varchar(200) default NULL COMMENT 'รูป' , ";
 $sql3 .= " `IMG_CEATEBY`varchar(200) NOT NULL COMMENT 'สร้างโดย' , ";
 $sql3 .= " `IMG_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
 $sql3 .= " `IMG_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
 $sql3 .= " `IMG_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
 $sql3 .= " `IMG_STATUS` tinyint(1) NOT NULL default '1'COMMENT 'สถานะ 1.ใช้งานปกติ 0.ยกเลิกใช้งาน' , ";
 $sql3 .= " INDEX(IMG_ID, IMG_PROID, IMG_NAME) ";
 $sql3 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางรูปสินค้า' COLLATE utf8_general_ci ";

  $create_tb3 = mysql_query($sql3) or die(mysql_error());


  //มี
  $sql4 = " CREATE TABLE IF NOT EXISTS `tbl_product` ( ";
  $sql4 .= " `PRO_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID สินค้า' , "; //id
  $sql4 .= " `PRO_NAME` varchar(200) NOT NULL COMMENT 'ชื่อสินค้า' , ";
  $sql4 .= " `PRO_DETAIL` text NOT NULL COMMENT 'รายละเอียด' , ";
  $sql4 .= " `PRO_SITE` varchar(100) NOT NULL COMMENT 'ขนาด' , ";
  $sql4 .= " `PRO_TPROID`int(11) NOT NULL COMMENT 'ID หมวดสินค้า' , ";
  $sql4 .= " `PRO_CREATEBY` varchar(200) NOT NULL COMMENT 'สร้างโดย' , ";
  $sql4 .= " `PRO_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
  $sql4 .= " `PRO_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
  $sql4 .= " `PRO_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
  $sql4 .= " `PRO_STATUS` tinyint(1) NOT NULL default '1' COMMENT 'สถานะ 1.ใช้งานปกติ 0.ยกเลิกใช้งาน' , ";
  $sql4 .= " INDEX(PRO_ID, PRO_NAME, PRO_SITE, PRO_TPROID) ";
  $sql4 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางสินค้า' COLLATE utf8_general_ci ";

  $create_tb4 = mysql_query($sql4) or die(mysql_error());


  //มี
  $sql5 = " CREATE TABLE IF NOT EXISTS `tbl_typecolor` ( ";
  $sql5 .= " `TCOL_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID ประเภทสี' , "; //id
  $sql5 .= " `TCOL_NAME` varchar(200) NOT NULL COMMENT 'ชื่อสี' , ";
  $sql5 .= " `TCOL_PHOTO` varchar(200) NULL COMMENT 'รูปสี' , ";
  $sql5 .= " `TCOL_CREATEBY` varchar(200) NOT NULL COMMENT 'สร้างโดย' , ";
  $sql5 .= " `TCOL_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
  $sql5 .= " `TCOL_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
  $sql5 .= " `TCOL_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
  $sql5 .= " `TCOL_STATUS` tinyint(1) NOT NULL DEFAULT '1' COMMENT 'สถานะ 1.ใช้งานปกติ 0.ยกเลิกใช้งาน' , ";
  $sql5 .= " INDEX(TCOL_ID, TCOL_NAME) ";
  $sql5 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางประเภทสี' COLLATE utf8_general_ci ";

   $create_tb5 = mysql_query($sql5) or die(mysql_error());


   //มี
   $sql6 = " CREATE TABLE IF NOT EXISTS `tbl_typeproduct` ( ";
   $sql6 .= " `TPRO_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID หมวดสินค้า' , "; //id
   $sql6 .= " `TPRO_NAME` varchar(200) NOT NULL COMMENT 'หมวดสินค้า' , ";
   $sql6 .= " `TPRO_CREATEBY` varchar(200) NOT NULL COMMENT 'สร้างโดย' , ";
   $sql6 .= " `TPRO_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
   $sql6 .= " `TPRO_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
   $sql6 .= " `TPRO_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
   $sql6 .= " `TPRO_STATUS` tinyint(1) NOT NULL default '1' COMMENT 'สถานะ 1.ใช้งานปกติ 0.ยกเลิกใช้งาน' , ";
   $sql6 .= " INDEX(TPRO_ID, TPRO_NAME) ";
   $sql6 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางหมวดสินค้า' COLLATE utf8_general_ci ";

   $create_tb6 = mysql_query($sql6) or die(mysql_error());


   //มี
   $sql7 = " CREATE TABLE IF NOT EXISTS `tbl_user` ( ";
   $sql7 .= " `USE_ID` int(11) NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'ID ผู้ใช้งาน' , "; //id
   $sql7 .= " `USE_USER` varchar(30) NOT NULL COMMENT 'ชื่อเข้าใช้' , ";
   $sql7 .= " `USE_PASS` varchar(30) NOT NULL COMMENT 'รหัสผ่าน' , ";
   $sql7 .= " `USE_NAME` varchar(100) NOT NULL COMMENT 'ชื่อ' , ";
   $sql7 .= " `USE_LNAME`varchar(100) NOT NULL COMMENT 'นามสกุล' , ";
   $sql7 .= " `USE_CREATEBY` varchar(200) NOT NULL COMMENT 'สร้างโดย' , ";
   $sql7 .= " `USE_CREATETIME` date NOT NULL COMMENT 'วันที่สร้าง' , ";
   $sql7 .= " `USE_UPDATEBY` varchar(200) NULL COMMENT 'แก้ไขโดย' , ";
   $sql7 .= " `USE_UPDATETIME` date NULL COMMENT 'วันที่แก้ไข' , ";
   $sql7 .= " `USE_STATUS` tinyint(1) NOT NULL default '1' COMMENT 'สถานะ 1.ใช้งาน 0.ยกเลิก' , ";
   $sql7 .= " INDEX(USE_ID, USE_USER, USE_NAME, USE_LNAME) ";
   $sql7 .= " ) ENGINE = InnoDB CHARACTER SET utf8 COMMENT = 'ตารางผู้ใช้งาน' COLLATE utf8_general_ci ";

    $create_tb7 = mysql_query($sql7) or die(mysql_error());

mysql_close($c);
?>

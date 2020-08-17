<?
	$host="localhost";
	$user="root";
	$pw="30323";

	$dbname="db_gm";

	$c=mysql_connect($host,$user,$pw); //เชื่อมตอ
	mysql_select_db($dbname,$c); //เลือกติดต่อกับฐานข้อมูลที่กำหนด
	mysql_query("set names utf8");
	//mysql_query("set names tis620"); //เชื่อมต่อไปเป็นภาษาไทย
 	if(!$c){
		echo"<h3>Can't connect database!</h3>";
		exit();
	}else{
		//echo"<h3>connect database is success</h3>";
	}
/*
	$intRejectTime = 20; // Minute
	$sql = "UPDATE `tbl_user` SET `USE_STATUS_LOGIN` = '0', `USE_TIME_LOGIN` = '0000-00-00 00:00:00'  WHERE 1 AND DATE_ADD(`USE_TIME_LOGIN`, INTERVAL $intRejectTime MINUTE) <= NOW() ";
	$result = mysql_query($sql) or die(mysql_error());*/
 ?>

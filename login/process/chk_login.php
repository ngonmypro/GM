<?php session_start();
	include "../../Connections/connect_mysql.php";
	$username = $_POST['username'];
	$password = $_POST['password'];

	//echo "{$username},{$password}";


	$sql = " SELECT *  FROM `tbl_user` WHERE `USE_USER` LIKE '{$username}' AND `USE_PASS` LIKE '{$password}'  ";
	//$sql = $sql . " AND `statonline` = 'N' ";
	$result = mysql_query($sql) or die(mysql_error());
	if(mysql_num_rows($result)==0){
		//header("content-type: text/javascript; charset=utf-8");
		//echo "alertBDialog('ข้อมูลไม่ถูกต้อง','Username หรือ Password ไม่ถูกต้อง. ');";
		echo "Username หรือ Password ไม่ถูกต้อง ";
	}else{
		$member = mysql_fetch_array($result);
      //echo "test";
      $_SESSION['USE_ID'] = $member['USE_ID'];
      $_SESSION['USE_NAME'] = $member['USE_NAME'];
			$_SESSION['USE_LNAME'] = $member['USE_LNAME'];

      echo "Y";

	}


	mysql_close($c); //close connection


?>

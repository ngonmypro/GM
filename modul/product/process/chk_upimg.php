<?php session_start();

date_default_timezone_set('Asia/Bangkok'); //set timezone ให้ตรงกับประเทศไทย
include "../../../Connections/connect_mysql.php";

date_default_timezone_set("Asia/Bangkok");
$Y = date("Y");
$m = date("m");
$d = date("d");
$H = date("H");
$i = date("i");
$s = date("s");
   //date("Y-m-d H:i:s");
   $newdate = $Y.$m.$d."_".$H.$i.$s;

//echo $_GET['imgid'];
$name = $_SESSION['USE_NAME'].' '.$_SESSION['USE_LNAME'];
$target_dir = "../../../imgproduct/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$uploadDetail = 0;
$response = "";
//echo "T".$target_file;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);

//echo $imageFileType;

// Check if image file is a actual image or fake image
/*
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        //echo "File is an image - " . $check["mime"] . ".";
		$response = "ไฟล์ชนิดรูปภาพ - " . $check["mime"] . ".";
        $uploadOk = 1;
		$uploadDetail = 0;
    } else {
        //echo "File is not an image.";
		$response = "ไม่ไช่ไฟล์ชนิดรูปภาพ.";
        $uploadOk = 0;
		$uploadDetail = 1;
    }
}

// Check if file already exists
if (file_exists($target_file)) {
  echo "1";
    //echo "Sorry, file already exists.";
	$response = "เสียใจด้วย, มีไฟล์ชื่อนี้อยู่ในระบบแล้ว.";
    $uploadOk = 0;
	$uploadDetail = 2;
}

// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
  echo "2";
    //echo "Sorry, your file is too large.";
	$response = "เสียใจด้วย, ไฟล์ของคุณมีขนาดใหญ่เกินไป.";
    $uploadOk = 0;
	$uploadDetail = 3;
}
*/
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg" && $imageFileType != "gif" ) {
  //echo "3";
    //echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
	$response = "เสียใจด้วย, ไฟล์ที่สามารถ อัปโหลดได้ ต้องเป็นไฟล์ JPG, JPEG, PNG & GIF เท่านั้น.";
    $uploadOk = 0;
	$uploadDetail = 4;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    //echo "Sorry, your file was not uploaded.";
	if ($uploadDetail == 1){
		$response = "เสียใจด้วย, ไม่สามารถอัปโหลดไฟล์ได้ เนื่องจากไม ่ไช่ไฟล์รูปภาพ.";
	}else
	if($uploadDetail == 2){
		$response = "เสียใจด้วย, ไม่สามารถอัปโหลดไฟล์ได้ เนื่องจาก ไฟล์ชื่อนี้อยู่ในระบบแล้ว.";
	}else
	if($uploadDetail == 3){
		$response = "เสียใจด้วย, ไม่สามารถอัปโหลดไฟล์ได้ เนื่องจาก ไฟล์มีขนาดใหญ่เกินไป.";
	}else
	if($uploadDetail == 4){
		$response = "เสียใจด้วย, ไม่สามารถอัปโหลดไฟล์ได้ เนื่องจาก ไฟล์ต้องเป็นชนิืด JPG, JPEG, PNG & GIF เท่านั้น.";
	}

// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        //echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
		$response = "ไฟล์ ". basename( $_FILES["fileToUpload"]["name"]). " อัปโหลด เสร็จเรียบร้อย.";
		$data = 0; //result success
		//rename file
    //echo basename( $_FILES["fileToUpload"]["name"]);
		rename ($target_dir . basename( $_FILES["fileToUpload"]["name"]), $target_dir . $_GET['proid'] . $newdate . '.' . $imageFileType);

		$target_file_n = $_GET['proid'] . $newdate . '.' . $imageFileType;
    //echo '</br>'.$target_file_n;
		//--- update data in table employee_tb
		$sql_add = " INSERT INTO tbl_imges (IMG_PROID, IMG_NAME, IMG_CEATEBY, IMG_CREATETIME) VALUES ('".$_GET['proid']."', '{$target_file_n}', '{$name}', NOW())";
		$result = mysql_query($sql_add) or die(mysql_error());

    $uploadDetail = 5;

  } else {
        //echo "Sorry, there was an error uploading your file.";
		$response = "เสียใจด้วย , มีข้อผิดพลาดในการ อัปโหลดไฟล์ของคุณ.";
		$data = 1; //result success
    }
}



	echo "{$uploadDetail}";

	mysql_close($c); //close connection
?>

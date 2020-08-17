<?php  session_start();
	include "../../../Connections/connect_mysql.php";

  $sql_se = " SELECT TCOL_ID, TCOL_NAME, TCOL_PHOTO FROM tbl_typecolor WHERE TCOL_ID = '".$_POST['colorid']."'";
  $result_se = mysql_query($sql_se) or die(mysql_error());
  $row_se = mysql_fetch_array($result_se);
?>
  <div data-parsley-validate class="form-horizontal form-label-left">
      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-2 col-sm-2 col-xs-12">สี</label>
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <input type='text' class="form-control col-md-10 col-xs-12" id="name_color" placeholder="กรุณากรอกหมวดสินค้า" onFocus="this.select()" onBlur="chkelm(this.id);"  onKeyUp="checkbill(this.id);" value="<?php echo $row_se['TCOL_NAME']; ?>">
                  </div>
          </div>

					<div class="row">
		          <div id="" class="form-group">
		              <label class="control-label col-md-3 col-sm-3 col-xs-12"></label>
		                  <div class="col-md-9 col-sm-9 col-xs-12">
		                    <img id="image_sig" src="Upcolor/<?php echo $row_se['TCOL_PHOTO']; ?>" width="300px" height="50px">
		                  </div>
		          </div>
		      </div>
      <div class="row">
        <form  id="frm">
          <div id="" class="form-group">
              <label class="control-label col-md-2 col-sm-2 col-xs-12">รูป</label>
                  <div class="col-md-10 col-sm-10 col-xs-12">
                    <input class="col-md-10 col-xs-12" type="file" name="fileToUpload" id="fileToUpload" value="<?php echo $row_se['TCOL_PHOTO']; ?>">
                  </div>
          </div>
        </form>
      </div>
  </div>

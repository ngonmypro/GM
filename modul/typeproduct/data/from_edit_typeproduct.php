<?php  session_start();
	include "../../../Connections/connect_mysql.php";
  $typroid = $_POST['typroid'];
  $sql_se_typroedit = "SELECT TPRO_NAME, TPRO_ID FROM tbl_typeproduct WHERE TPRO_ID = '{$typroid}'";
  $result_se_typroedit = mysql_query($sql_se_typroedit)or die(mysql_error());
  $row_se_typroedit = mysql_fetch_array($result_se_typroedit);
?>
  <div data-parsley-validate class="form-horizontal form-label-left">
      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-2 col-sm-2 col-xs-12">หมวดสินค้า</label>
                  <div class="col-md-10 col-sm-10 col-xs-12">
                    <input type='text' class="form-control col-md-10 col-xs-12" id="name_typeproduct" placeholder="กรุณากรอกหมวดสินค้า" onFocus="this.select()" onBlur="chkelm(this.id);"  onKeyUp="checkbill(this.id);" value="<?php echo $row_se_typroedit['TPRO_NAME']; ?>">
                  </div>
          </div>
      </div>
  </div>

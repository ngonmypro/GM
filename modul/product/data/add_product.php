<?php  session_start();
	include "../../../Connections/connect_mysql.php";
?>
  <div data-parsley-validate class="form-horizontal form-label-left">
      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-3 col-sm-3 col-xs-12">ประเภทสินค้า</label>
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <select class="form-control col-md-10 col-xs-12" name="" id="type_product">
                     <option value=""> # กรุณาเลือกประเภทสินค้า # </option>
                      <?php $sql_tpro = " SELECT TPRO_ID, TPRO_NAME FROM tbl_typeproduct";
                      $result_tpro = mysql_query($sql_tpro) or die(mysql_error());
                      while ($row_tpro = mysql_fetch_array($result_tpro)) { ?>
                      <option value="<?php echo $row_tpro['TPRO_ID']; ?>"><?php echo $row_tpro['TPRO_NAME']; ?></option>
                    <?php } ?>
                    </select>
                  </div>
          </div>
      </div>

      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-3 col-sm-3 col-xs-12">ชื่อ</label>
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <input type='text' class="form-control col-md-10 col-xs-12" id="name__product" placeholder="กรุณากรอกชื่อสินค้า" onFocus="this.select()" onBlur="chkelm(this.id);"  onKeyUp="checkbill(this.id);">
                  </div>
          </div>
      </div>

      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-3 col-sm-3 col-xs-12">รายละเอียด</label>
                  <div class="col-md-8 col-sm-8 col-xs-12">
                    <input type='text' class="form-control col-md-10 col-xs-12" id="detail_product" placeholder="กรุณากรอกรายละเอียด" onFocus="this.select()" onBlur="chkelm(this.id);"  onKeyUp="checkbill(this.id);">
                  </div>
          </div>
      </div>

      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-3 col-sm-3 col-xs-12">ขนาด</label>
                  <div class="col-md-5 col-sm-5 col-xs-12">
                    <input type='text' class="form-control col-md-10 col-xs-12" id="site_product" placeholder="กรุณากรอกขนาด" onFocus="this.select()" onBlur="chkelm(this.id);"  onKeyUp="checkbill(this.id);">
                  </div>
          </div>
      </div>
  </div>

<?php  session_start();
	//include "../../../Connections/connect_mysql.php";
?>
  <div data-parsley-validate class="form-horizontal form-label-left">
      <div class="row">
          <div id="" class="form-group">
              <label class="control-label col-md-2 col-sm-2 col-xs-12">หมวดสินค้า</label>
                  <div class="col-md-10 col-sm-10 col-xs-12">
                    <input type='text' class="form-control col-md-10 col-xs-12" id="name_typeproduct" placeholder="กรุณากรอกหมวดสินค้า" onFocus="this.select()" onBlur="chkelm(this.id);"  onKeyUp="checkbill(this.id);">
                  </div>
          </div>
      </div>
  </div>

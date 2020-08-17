<?php  session_start();
	//include "../../../Connections/connect_mysql.php";


?>
<script type="text/javascript">
var proidimg = <?php echo $_POST['proid']; ?>;
//alert(proid)
  $("#show_img").load("modul/product/data/show_imgproduct.php",{proidimg:proidimg});
</script>
  <div data-parsley-validate class="form-horizontal form-label-left">
            <div class="row">
        <form  id="frm">
          <div id="" class="form-group">
              <label class="control-label col-md-2 col-sm-2 col-xs-12">รูป</label>
                  <div class="col-md-10 col-sm-10 col-xs-12">
                    <input class="col-md-10 col-xs-12" type="file" name="fileToUpload" id="fileToUpload" multiple="multiple">
                  </div>
          </div>
        </form>
      </div>
  </div>
<hr>
  <div class="" id="show_img"></div>

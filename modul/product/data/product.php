<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
?>
<script type="text/javascript">
  $("#show_product").load("modul/product/data/show_product.php");

</script>

     <div><button type="button" class="btn btn-info" onClick="javascript:add_product();"><i class="fa fa-plus-circle"></i> เพิ่มสินค้า</button></div>

<br>
     <div id="show_product"></div>

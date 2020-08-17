<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
?>
<script type="text/javascript">
  $("#show_banner").load("modul/banner/data/show_bannergm.php");

</script>

     <div><button type="button" class="btn btn-info" onClick="javascript:add_banner();"><i class="fa fa-plus-circle"></i> เพิ่มแบนเนอร์</button></div>

<br>
     <div id="show_banner"></div>

<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
?>
<script type="text/javascript">
  $("#show_color").load("modul/color/data/show_color.php");

</script>

     <div><button type="button" class="btn btn-info" onClick="javascript:add_color();"><i class="fa fa-plus-circle"></i> เพิ่มสี</button></div>

<br>
     <div id="show_color"></div>

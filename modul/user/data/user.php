<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
?>
<script type="text/javascript">
  $("#show_user").load("modul/user/data/show_user.php");

</script>

     <div><button type="button" class="btn btn-info" onClick="javascript:add_user();"><i class="fa fa-plus-circle"></i> เพิ่มผู้ใช้งาน</button></div>

<br>
     <div id="show_user"></div>

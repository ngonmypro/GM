<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);

?>
<script type="text/javascript">
$('.selectpicker').selectpicker({
    style: 'btn-default',
    size: 10
});

</script>
<div data-parsley-validate class="form-horizontal form-label-left">
    <div class="form-group">
      <label class="control-label col-md-2 col-sm-2 col-xs-12">ชื่อ</label>
        <div class="col-md-3 col-sm-3 col-xs-12">
          <input type='text' class="form-control" id="add_user_name" placeholder="กรุณากรอกชื่อ"/>
        </div>

        <label class="control-label col-md-2 col-sm-2 col-xs-12">นามสกุล</label>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <input type='text' class="form-control" id="add_user_lname" placeholder="กรุณากรอกนามสกุล"/>
          </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2 col-sm-2 col-xs-12">User</label>
        <div class="col-md-3 col-sm-3 col-xs-12">
          <input type='text' class="form-control" id="add_user_user" placeholder="กรุณากรอก User เข้าใช้งาน"/>
        </div>

        <label class="control-label col-md-2 col-sm-2 col-xs-12">Password</label>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <input type='password' class="form-control" id="add_user_password" placeholder="กรุณากรอก Password"/>
          </div>
    </div>
</div>

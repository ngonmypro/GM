<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);

$sql_se_euse = " SELECT * FROM `tbl_user` WHERE `USE_ID` = '".$_POST['use_id']."'";
$result_se_euse = mysql_query($sql_se_euse) or die(mysql_error());
$row_se_euse = mysql_fetch_array($result_se_euse);
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
          <input type='text' class="form-control" id="edit_user_name" placeholder="กรุณากรอกรหัสพนักงาน" value="<?php echo $row_se_euse['USE_NAME']; ?>"/>
        </div>

        <label class="control-label col-md-2 col-sm-2 col-xs-12">นามสกุล</label>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <input type='text' class="form-control" id="edit_user_lname" placeholder="กรุณากรอกชื่อ-นามสกุล" value="<?php echo $row_se_euse['USE_LNAME']; ?>"/>
          </div>
    </div>

    <div class="form-group">
      <label class="control-label col-md-2 col-sm-2 col-xs-12">User</label>
        <div class="col-md-3 col-sm-3 col-xs-12">
          <input type='text' class="form-control" id="edit_user_user" placeholder="กรุณากรอก User เข้าใช้งาน" value="<?php echo $row_se_euse['USE_USER']; ?>" disabled/>
        </div>

        <label class="control-label col-md-2 col-sm-2 col-xs-12">Password</label>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <input type='password' class="form-control" id="edit_user_password" placeholder="กรุณากรอก Password" value="<?php echo $row_se_euse['USE_PASS']; ?>" />
          </div>
    </div>
</div>

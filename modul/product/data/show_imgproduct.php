<?php include "../../../Connections/connect_mysql.php";
session_start();
set_time_limit(0);
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Project All Page</title>
</head>
<script>
$('.selectpicker').selectpicker({
    style: 'btn-default',
    size: 10
});

  $(document).ready( function () {
    var table = $('#imgproducttb').DataTable({
        paging:         false,
    sort: false,
    select: true,
          dom: 'Bfrtip',
          lengthMenu: [
          [ 10, 25, 50, -1 ],
          [ '10 rows', '25 rows', '50 rows', 'Show all' ]
      ],
          buttons: [
            'pageLength',
            /*{extend: 'colvis',
            collectionLayout: 'fixed two-column'}*/
          ],
      });

     $('#imgproducttb tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
        }
        else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
        }
      } );

    $('#imgproducttb tfoot th').each( function () {
      var title = $(this).text();
      if(title != 'ลำดับที่' && title != 'จัดการ'){
        $(this).html( '<input type="text" placeholder=" '+title+'" style="width:90%;"  />' );
      }else{
        $(this).html(' ');
      }
    });

    // Apply the search ค้นหาจาก footer ------------------------
    $('#imgproducttb').DataTable().columns().every( function () {
      var that = this;
      //ค้นหาจาก footer
      $( 'input', this.footer() ).on( 'keyup change', function () {
        if ( that.search() !== this.value ) {
          that
            .search( this.value )
            .draw();
        }
      });
    });

  });
  </script>
<body>

  <!-- ตารางสินค้า -->
  <table id="imgproducttb" class="display compact" cellspacing="0" width="100%"><!--display cell-border compact row-border table table-bordered-->
  <thead>
    <tr>
        <th style="text-align:center; width:10%;">ลำดับที่</th>
        <th style="text-align:center; padding-left:10px;">รูป</th>
        <th style="text-align:center; padding-left:10px; width:20%;">จัดการ</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
    <th style="text-align:center;">ลำดับที่</th>
    <th style="text-align:center; padding-left:10px;"></th>
    <th style="text-align:center; padding-left:10px;">จัดการ</th>
    </tr>
  </tfoot>
  <tbody>
    <?php $a = 1;
      $sql_se_imgproduct = " SELECT IMG_ID, IMG_PROID, IMG_NAME FROM `tbl_imges` WHERE IMG_PROID = '".$_POST['proidimg']."'";
      $result_se_imgproduct = mysql_query($sql_se_imgproduct) or die(mysql_error());

    while ($row_se_imgproduct = mysql_fetch_array($result_se_imgproduct)) {
    ?>
  <tr>
    <td style="text-align:center; width:10%;" onClick="javascript:();"><?php echo $a; ?></td>
    <td style="text-align:center; padding-left:10px; width:15%" onClick="javascript:();"><img id="image_sig" src="imgproduct/<?php echo $row_se_imgproduct['IMG_NAME']; ?>" width="400px" height="50px"></td>
    <td style="text-align:center; padding-left:10px; width:20%;" onClick="javascript:();">
        <!--<a href="javascript:();" class="btn btn-warning btn-xs"  onClick="javascript:edit_imgproduct(<?php# echo $row_se_imgproduct['IMG_ID']; ?>);"><i class="fa fa-gear"></i> Edit </a>-->
        <a href="javascript:();" class="btn btn-danger btn-xs" onClick="javascript:delete_imgproduct(<?php echo $row_se_imgproduct['IMG_ID']; ?>,'<?php echo $row_se_imgproduct['IMG_NAME']; ?>');"><i class="fa fa-trash-o"></i> Delete </a>
    </td>

  </tr>
  <?
  $a += 1;
  }//while
  ?>
  </tbody>

  </table>

</body>
</html>

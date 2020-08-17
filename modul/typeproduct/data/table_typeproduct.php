<?php include "../../../Connections/connect_mysql.php"; ?>
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
    var table = $('#TyProtb').DataTable({
    //dom: 'Bfrtip',
        //scrollY:        "300px",
        //scrollX:        true,
        //scrollCollapse: true,
        paging:         false,
        //fixedColumns:   {
            //leftColumns: 1,
            //rightColumns: 1
        //}
    sort: false,
    select: true,
          dom: 'Bfrtip',
          lengthMenu: [
          [ 10, 25, 50, -1 ],
          [ '10 rows', '25 rows', '50 rows', 'Show all' ]
      ],
          buttons: [
            'pageLength', 'print' ,
            {extend: 'colvis',
            collectionLayout: 'fixed two-column'}/*,
            {extend: 'pdfHtml5',
            text: '<i class="fa fa-file-pdf-o"></i>',
            titleAttr: 'PDF',
            filename: 'Data barcode export',
            message: 'PDF View Barcode.'}*/
          ],
      });

     $('#TyProtb tbody').on( 'click', 'tr', function () {
        if ( $(this).hasClass('selected') ) {
          $(this).removeClass('selected');
        }
        else {
          table.$('tr.selected').removeClass('selected');
          $(this).addClass('selected');
        }
      } );

    $('#TyProtb tfoot th').each( function () {
      var title = $(this).text();
      if((title != 'ลำดับที่') && (title !='จัดการ')){
        $(this).html( '<input type="text" placeholder=" '+title+'" style="width:90%;"  />' );
      }else{
        $(this).html(' ');
      }
    });

    // Apply the search ค้นหาจาก footer ------------------------
    $('#TyProtb').DataTable().columns().every( function () {
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
  <table id="TyProtb" class="display compact" cellspacing="0" width="100%"><!--display cell-border compact row-border table table-bordered-->
  <thead>
    <tr>
        <th style="text-align:center; width:10%;">ลำดับที่</th>
        <th style="text-align:left; padding-left:10px;">ชื่อ</th>
        <th style="text-align:center; padding-left:10px; width:30%;">จัดการ</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
    <th style="text-align:center;">ลำดับที่</th>
    <th style="text-align:left; padding-left:10px;"></th>
    <th style="text-align:center; padding-left:10px;">จัดการ</th>
    </tr>
  </tfoot>
  <?php
  $rowint = 1;
  $sql_se_typro = " SELECT * FROM tbl_typeproduct ";
    $result_se_typro = mysql_query($sql_se_typro) or die(mysql_error());
    while ($row_se_typro = mysql_fetch_array($result_se_typro)) {
    $TPRO_ID = $row_se_typro['TPRO_ID'];
    $TPRO_NAME = $row_se_typro['TPRO_NAME'];
   ?>
  <tbody>
  <tr>
    <td style="text-align:center; width:10%;" onClick="javascript:();"><?php echo $rowint; ?> </td>
    <td style="text-align:left; padding-left:10px;" onClick="javascript:();"><?php echo $TPRO_NAME; ?> </td>
    <td style="text-align:center; padding-left:10px; width:30%;" onClick="javascript:();">
      <a href="javascript:edit_typeproduct(<?php echo $TPRO_ID; ?>);" class="btn btn-warning btn-xs" ><i class="fa fa-cog"></i> แก้ไข </a>
      <a href="javascript:del_typeproduct(<?php echo $TPRO_ID; ?>,'<?php echo $TPRO_NAME; ?>');" class="btn btn-danger btn-xs" ><i class="fa fa-trash"></i> ลบ </a>
    </td>

  </tr>
  <?
  $rowint += 1;
  }//while
  ?>
  </tbody>

  </table>

</body>
</html>

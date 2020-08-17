//---------------------------- login

function checkKey(n){

  if (window.event.keyCode == 13){ //Enter
	  if( (n=="username") && ($('#username').val() != '') ){
		//alert("test enter");
		$('#password').focus();
	  }
	  if( (n=="password") && ($('#password').val() !='' ) ){
		//alert(n);
		checkuser();
	  }
	  //schstock();
  }else{
	  $('#pp').html('');
  }
}

function checkuser(){
	//alert('test');
	var username = $('#username').val();
	var password = $('#password').val();
	var data = "username=" + username + "&password=" + password;
	//alert(data);
	$('#pp').html("<img src='images/loading.gif' height='40' width='40' /> <br> Loading...");

	$.ajax({
		type: "POST",
		url: "login/process/chk_login.php",
		cache: false,
		data: data,
		success: function(msg){
			//alert(msg);
			if(msg=='Y'){
				window.location.href = "index.php";
			}else{
				$('#username').focus();
				$('#username').select();
				$("#pp").html(msg);
			}
		},
		error: function(){
			//
		},
		complete: function(){
			//
		}
	});
}

//---------------------------- logoutuser

function logoutuser(){
	$.ajax({
		type: "POST",
		url: "login/process/chk_logout.php",
		cache: false,
		data: "",
		success: function(msg){
			//alert(msg);
			if(msg =='Y'){
				//alert("ออกระบบแล้ว")
				//BootstrapDialog.alert('I want banana!');
				window.location.href = "index.php";
			}else{
				//
			}
		},
		error: function(){
			//
		},
		complete: function(){
			//
		}
	});
}


// Show data
function show_typeproduct() {		// TYPE PRODUCE
	$("#showdata").load("modul/typeproduct/data/show_typeproduct.php");
}

function show_user() {		// USER
	$("#showdata").load("modul/user/data/user.php");
}

function show_color() {
	$("#showdata").load("modul/color/data/color.php");
}

function show_product() {
	$("#showdata").load("modul/product/data/product.php");
}

function show_banner() {
	alert("TT")
	$("#showdata").load("modul/banner/data/bannergm.php");
}







// Add from data
function add_typeproduct() {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มหมวดสินค้า',
		message: $('<div></div>').load('modul/typeproduct/data/from_add_typeproduct.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				//testhd();
				add_typeproduct_process();
				//addoperate();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


function add_user() { // USER
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มผู้ใช้งาน',
		message: $('<div></div>').load('modul/user/data/add_user.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				adduser_pro();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


function add_color() {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มสีใหม่',
		message: $('<div></div>').load('modul/color/data/add_color.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				addcolor_pro();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function add_product() {
  BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มสินค้า',
		message: $('<div></div>').load('modul/product/data/add_product.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				addproduct_pro();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function img_product(proid) {
  //alert(proid)
  BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มรูปสินค้า',
		message: $('<div></div>').load('modul/product/data/img_product.php',{proid:proid}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				img_product_pro(proid);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}










// Add Process data
function add_typeproduct_process() {			// TYPE PRODUCE
	var name_typeproduct = $("#name_typeproduct").val();
	var data = "name_typeproduct=" + name_typeproduct;
	//alert(name_typeproduct)
	$.ajax({
		type: "POST",
		url: "modul/typeproduct/process/chk_addtypeproduct.php",
		cache: false,
		data: data,
		success: function(msg){
			//alert(msg);
			//var data = msg.split(",");
			if(msg == 'Y'){
				BootstrapDialog.show({
					type:BootstrapDialog.TYPE_SUCCESS,
					title: 'Success',
					message: "บันทึกข้อมูลสำเร็จ",
					buttons: [{
						label: 'Close',
						action: function(dialogItself){
							dialogItself.close();
						}
					}],
					draggable: true,
					closable:false
				});
				show_typeproduct();
			}else{
				BootstrapDialog.show({
					type:BootstrapDialog.TYPE_DANGER,
					title: 'Error',
					message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
					buttons: [{
						label: 'Close',
						action: function(dialogItself){
							dialogItself.close();
						}
					}],
					draggable: true,
					closable:false
				});
			}
		},
		error: function(){
			//
		},
		complete: function(){
			//
		}
	});
}


function adduser_pro() {		// USER
	var add_user_name = $("#add_user_name").val();
	var add_user_lname = $("#add_user_lname").val();
	var add_user_user = $("#add_user_user").val();
	var add_user_password = $("#add_user_password").val();

	var data = "add_user_name=" + add_user_name + "&add_user_lname=" + add_user_lname + "&add_user_user=" + add_user_user + "&add_user_password=" + add_user_password;
//alert(data)
	if (add_user_name != '' && add_user_lname != '' && add_user_user != '' && add_user_password != '') {
		$.ajax({
			type: "POST",
			url: "modul/user/process/chk_add_user.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_user();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "ผู้ใช้งาน มีในระบบแล้ว",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function addcolor_pro() {
	var name_color = $("#name_color").val();
	//var img = new FormData($("#frm")[0]);

	var data = "name_color=" + name_color;
	//alert(data)

	if (name_color != '' && document.getElementById("fileToUpload").files.length != 0) {
		//alert(data)
		$.ajax({
			type: "POST",
			url: "modul/color/process/chk_add_color.php",
			cache: false,
			data: data,
			success: function(msg){
				data = msg.split(",");
				var imgid = data[1];
				if(data[0]=="Y"){
					$.ajax({
					url: "modul/color/process/chk_upimg.php?imgid=" + imgid + "",
					type: "POST",
					data: new FormData($("#frm")[0]), // The form with the file    inputs.
					processData: false,                          // Using FormData, no need to process data.
					contentType:false
        }).done(function(data){
					if (data == 1){
						 BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจากไม่ไช่ไฟล์รูปภาพ.");
					}else
					if(data == 2){
						 BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจาก ไฟล์ชื่อนี้อยู่ในระบบแล้ว.");
					}else
					if(data == 3){
						 BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจาก ไฟล์มีขนาดใหญ่เกินไป.");
					}else
					if(data == 4){
						 BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจาก ไฟล์ต้องเป็นชนิด JPG, JPEG, PNG & GIF เท่านั้น.");
					}else{
						BootstrapDialog.alert("อัพโหลดไฟล์ เสร็จเรียบร้อย.");
					}
					}).fail(function(){
						BootstrapDialog.alert("ไม่สามารถส่งไฟล์ได้.");
				});

					show_color();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "สี มีในระบบแล้ว",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function addproduct_pro() {
  var type_product = $("#type_product").val();
  var name__product = $("#name__product").val();
  var detail_product = $("#detail_product").val();
  var site_product = $("#site_product").val();
  var data = "type_product=" + type_product + "&name__product=" + name__product + "&detail_product=" + detail_product + "&site_product=" + site_product;

  if (type_product != '' && name__product != '' && detail_product != '' && site_product != '') {
		$.ajax({
			type: "POST",
			url: "modul/product/process/chk_add_product.php",
			cache: false,
			data: data,
			success: function(msg){
			//	alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_product();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "สินค้า มีในระบบแล้ว",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function img_product_pro(proid) {
  if (document.getElementById("fileToUpload").files.length != 0) {
    //alert(proid)
          $.ajax({
          url: "modul/product/process/chk_upimg.php?proid=" + proid + "",
          type: "POST",
          data: new FormData($("#frm")[0]), // The form with the file    inputs.
          processData: false,                          // Using FormData, no need to process data.
          contentType:false
        }).done(function(data){
          //alert(data)
          if (data == 1){
             BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจากไม่ไช่ไฟล์รูปภาพ.");
          }else
          if(data == 2){
             BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจาก ไฟล์ชื่อนี้อยู่ในระบบแล้ว.");
          }else
          if(data == 3){
             BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจาก ไฟล์มีขนาดใหญ่เกินไป.");
          }else
          if(data == 4){
             BootstrapDialog.alert("ไม่สามารถอัพโหลดไฟล์ได้ เนื่องจาก ไฟล์ต้องเป็นชนิด JPG, JPEG, PNG & GIF เท่านั้น.");
          }else{
            //BootstrapDialog.alert("อัพโหลดไฟล์ เสร็จเรียบร้อย.");
            img_product(proid);
          }
          }).fail(function(){
            BootstrapDialog.alert("ไม่สามารถส่งไฟล์ได้.");
        });

          //show_color();
  }else {
    alert("fail")
    BootstrapDialog.show({
      type:BootstrapDialog.TYPE_WARNING,
      title: 'Error',
      message: "กรุณากรอกข้อมูลให้ครบ",
      buttons: [{
        label: 'Close',
        action: function(dialogItself){
          dialogItself.close();
        }
      }],
      draggable: true,
      closable:false
    });
  }
}





// Edit from data
function edit_typeproduct(typroid) {			// TYPE PRODUCE
	//alert(typroid)
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-cog"></i> แก้ไขหมวดสินค้า',
		message: $('<div></div>').load('modul/typeproduct/data/from_edit_typeproduct.php', {typroid:typroid}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				//testhd();
				edit_typeproduct_process(typroid);
				//addoperate();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


function edit_user(use_id) {		// USER
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขผู้ใช้งาน',
		message: $('<div></div>').load('modul/user/data/edit_user.php',{use_id : use_id}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				edituser_pro(use_id);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function edit_color(colorid) {
  BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขสี',
		message: $('<div></div>').load('modul/color/data/edit_color.php',{colorid : colorid}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				editcolor_pro(colorid);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function edit_product(proid) {
  BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขสินค้า',
		message: $('<div></div>').load('modul/product/data/edit_product.php',{proid : proid}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				editproduct_pro(proid);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}







// Edit Process data
	function edit_typeproduct_process(typroid) {		// TYPE PRODUCE
		var name_typeproduct = $("#name_typeproduct").val();
		var data = "name_typeproduct=" + name_typeproduct + "&typroid=" + typroid;

		$.ajax({
			type: "POST",
			url: "modul/typeproduct/process/chk_edittypeproduct.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				//var data = msg.split(",");
				if(msg == 'Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_typeproduct();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}



	function edituser_pro(use_id) {				// USER
		var edit_user_name = $("#edit_user_name").val();
		var edit_user_lname = $("#edit_user_lname").val();
		var edit_user_user = $("#edit_user_user").val();
		var edit_user_password = $("#edit_user_password").val();

		var data = "edit_user_name=" + edit_user_name + "&edit_user_lname=" + edit_user_lname + "&edit_user_user=" + edit_user_user + "&edit_user_password=" + edit_user_password + "&use_id=" + use_id;

		if (edit_user_name != '' && edit_user_lname != '' && edit_user_user != '' && edit_user_password != '') {
			$.ajax({
				type: "POST",
				url: "modul/user/process/chk_edit_user.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_user();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "ผู้ใช้งาน มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}


  function editcolor_pro(colorid) {


    if (document.getElementById("fileToUpload").files.length != 0) {
      alert("มีไฟล์");
      var name_color = $("#name_color").val();
      var data = "name_color=" + name_color + "&colorid=" + colorid;
    }else {
      var name_color = $("#name_color").val();
      var data = "name_color=" + name_color + "&colorid=" + colorid;
      $.ajax({
				type: "POST",
				url: "modul/color/process/chk_edit_color.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_color();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "สินค้า มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
    }

  }

  function editproduct_pro(proid) {
    var type_product = $("#type_product").val();
    var name__product = $("#name__product").val();
    var detail_product = $("#detail_product").val();
    var site_product = $("#site_product").val();
    var data = "type_product=" + type_product + "&name__product=" + name__product + "&detail_product=" + detail_product + "&site_product=" + site_product + "&proid=" + proid;
    //alert(data)
		if (type_product != '' && name__product != '' && detail_product != '' && site_product != '') {
			$.ajax({
				type: "POST",
				url: "modul/product/process/chk_edit_product.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_product();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "สินค้า มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
  }






// Delete from data
function del_typeproduct(typroid,typename) {			// TYPE PRODUCE
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ลบหมวดสินค้า',
		message: "คุณต้องการลบ หมวดสินค้า " + typename + " ใช่/ไม่ ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var data = "typroid=" + typroid;
				$.ajax({
						url: "modul/typeproduct/process/chk_deltypeproduct.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ลบข้อมูลสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_typeproduct();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


function delete_user(use_id,use_name) {		//// USER
	//alert(iddel + ',' + name);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ลบผู้ใช้งาน',
		message: "คุณต้องการลบ USER ของ " + use_name + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var data = "use_id=" + use_id;
				$.ajax({
						url: "modul/user/process/chk_del_user.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ลบข้อมูลสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_user();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function delete_product(proid,proname) {
  BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ลบสินค้า',
		message: "คุณต้องการลบ สินค้า " + proname + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var data = "proid=" + proid;
				$.ajax({
						url: "modul/product/process/chk_del_product.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ลบข้อมูลสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_product();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}













// --- JavaScript Document --- //
function show_personnel() {
	$("#showdata").load("modul/wage/data/personnel.php");
}

function test() {
	$("#showdata").load("downloaddata/load_dataproduct.php")
}
function show_other() {
	$("#showdata").load("modul/other/data/other.php");
}

function show_wage() {
	$("#showdata").load("modul/wage/data/wage.php");
}

function show_car() {
	$("#showdata").load("modul/car/data/car.php");
}

function show_car2() {
	$("#showdata").load("modul/car/data/show_car2.php");
}

function show_preple() {
	$("#showdata").load("modul/personnel/data/personnel.php");
}

function show_preple2() {
	$("#showdata").load("modul/personnel/data/personnel2.php");
}

function show_passage() {
	$("#showdata").load("modul/passage/data/passage.php");
}

function show_ratproduct() {
	$("#showdata").load("modul/ratproduct/data/ratproduct.php");
}

/*function show_product() {
	$("#showdata").load("modul/ratproduct/data/product.php");
}*/

function show_ratcar() {
	$("#showdata").load("modul/ratcar/data/ratcar.php");
}



function show_type_car() {
	$("#showdata").load("modul/type_car/data/show_type_car.php");
}

function show_distance() {
	$("#showdata").load("modul/distance/data/show_distance.php");
}

function show_depratment() {
	$("#showdata").load("modul/depratment/data/depratment.php");
}

function show_bran() {
	$("#showdata").load("modul/bran/data/bran.php");
}

function showscreen(){
	var windowWidth = 1450;
	var windowHeight = 900;
	window.resizeTo(windowWidth,windowHeight);
	var xPos = screen.width - (windowWidth*4);
	var yPos = screen.height - (windowHeight*2);
	window.moveTo(xPos, yPos);
	window.focus();
}

//---------------------------- login
/*
function checkKey(n){

  if (window.event.keyCode == 13){ //Enter
	  if( (n=="username") && ($('#username').val() != '') ){
		//alert("test enter");
		$('#password').focus();
	  }
	  if( (n=="password") && ($('#password').val() !='' ) ){
		//alert(n);
		checkuser();
	  }
	  //schstock();
  }else{
	  $('#pp').html('');
  }
}

function checkuser(){
	//alert('test');
	var username = $('#username').val();
	var password = $('#password').val();
	var data = "username=" + username + "&password=" + password;
	//alert(data);
	$('#pp').html("<img src='images/loading.gif' height='40' width='40' /> <br> Loading...");

	$.ajax({
		type: "POST",
		url: "login/process/chk_login.php",
		cache: false,
		data: data,
		success: function(msg){
			//alert(msg);
			if(msg=='Y'){
				window.location.href = "index.php";
			}else{
				$('#username').focus();
				$('#username').select();
				$("#pp").html(msg);
			}
		},
		error: function(){
			//
		},
		complete: function(){
			//
		}
	});
}

//---------------------------- logoutuser

function logoutuser(){
	$.ajax({
		type: "POST",
		url: "login/process/chk_logout.php",
		cache: false,
		data: "",
		success: function(msg){
			//alert(msg);
			if(msg =='Y'){
				//alert("ออกระบบแล้ว")
				//BootstrapDialog.alert('I want banana!');
				window.location.href = "index.php";
			}else{
				//
			}
		},
		error: function(){
			//
		},
		complete: function(){
			//
		}
	});
}
*/
//---------------------------- ดูรายละเอียดค่าแรง
function search_user_wage() {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-file-text-o"></i> รายละเอียดค่าแรง',
		message: $('<div></div>').load('modul/wage/data/user_wage.php'),
		buttons: [{
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}



//----------------------------------- งานอื่นๆ

function add_other() {		//
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มรายการเบ็ดเตล็ด',
		message: $('<div></div>').load('modul/other/data/add_other.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				//addoperate();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function edit_other() {		//
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขรายการเบ็ดเตล็ด',
		message: $('<div></div>').load('modul/other/data/edit_other.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function delete_other() {
	//alert(iddel + ',' + name);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ลบรายการปฏิบัติงานอื่นๆ',
		message: "คุณต้องการลบ " + "กต-1234" + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				dialogItself.close();
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

//--------------------------- ประเภทรถ

function add_distance() {
	var add_tcar_distance = $("#add_tcar_distance").val();
	var distance_add = $("#distance_add").val();
	var data = "add_tcar_distance=" + add_tcar_distance + "&distance_add=" + distance_add;
	if (add_tcar_distance != '' && distance_add != '') {
		$.ajax({
			type: "POST",
			url: "modul/distance/process/chk_add_distance.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_distance();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function edit_distance(dist_id) {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขระยะทาง',
		message: $('<div></div>').load('modul/distance/data/edit_distance.php',{dist_id : dist_id}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				edit_distance_pro(dist_id);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function edit_distance_pro(distid) {
	var edit_tcar_distance = $("#edit_tcar_distance").val();
	var distance_edit = $("#distance_edit").val();
	var data = "edit_tcar_distance=" + edit_tcar_distance + "&distance_edit=" + distance_edit + "&distid=" + distid;
	if (edit_tcar_distance != '' && distance_edit != '') {
		$.ajax({
			type: "POST",
			url: "modul/distance/process/chk_edit_distance.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_distance();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function delete_distance(dist_id,dist_name,tcar_name) {
	//alert(dist_id + ',' + dist_name + ',' + tcar_name);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ลบระยะทาง',
		message: "คุณต้องการลบ ประเภทรถ " + dist_name + ' ระยะทาง ' + tcar_name + " กิโลเมตร ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var data = "dist_id=" + dist_id;
				$.ajax({
					  url: "modul/distance/process/chk_del_distance.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ลบข้อมูลสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_distance();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
		 						type:BootstrapDialog.TYPE_WARNING,
		 						title: 'Error',
		 						message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
		 						buttons: [{
		 							label: 'Close',
		 							action: function(dialogItself){
		 								dialogItself.close();
		 							}
		 						}],
		 						draggable: true,
		 						closable:false
		 					});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


//--------------------------- ประเภทรถ

function add_type_car() {
	var type_car_add = $("#type_car_add").val();
	var data = "type_car_add=" + type_car_add;
	if (type_car_add != '') {
		$.ajax({
			type: "POST",
			url: "modul/type_car/process/chk_add_type_car.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_type_car();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function edit_type_car(tcar_id) {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		//size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขประเภทรถ',
		message: $('<div></div>').load('modul/type_car/data/edit_type_car.php',{tcar_id : tcar_id}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				edit_tcar_pro(tcar_id);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function edit_tcar_pro(tcar_id) {
	var type_car_edit = $("#type_car_edit").val();
	var data = "type_car_edit=" + type_car_edit + "&tcar_id=" + tcar_id;
	if (type_car_edit != '') {
		$.ajax({
			type: "POST",
			url: "modul/type_car/process/chk_edit_type_car.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_type_car();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function delete_type_car(tcar_id,tcar_name) {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ลบประเภทรถ',
		message: "คุณต้องการลบ " + tcar_name + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var data = "tcar_id=" + tcar_id;
				$.ajax({
					  url: "modul/type_car/process/chk_del_type_car.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ลบข้อมูลสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_type_car();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
		 						type:BootstrapDialog.TYPE_WARNING,
		 						title: 'Error',
		 						message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
		 						buttons: [{
		 							label: 'Close',
		 							action: function(dialogItself){
		 								dialogItself.close();
		 							}
		 						}],
		 						draggable: true,
		 						closable:false
		 					});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


//--------------------------- รถ

function add_car() {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มรถ',
		message: $('<div></div>').load('modul/car/data/add_car.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				addcar_pro();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function addcar_pro() {
	var add_car_type = $("#add_car_type").val();
	var add_car_license = $("#add_car_license").val();
	var add_car_mileaga = $("#add_car_mileaga").val();
	var data = "add_car_type=" + add_car_type + "&add_car_license=" + add_car_license + "&add_car_mileaga=" + add_car_mileaga;
	//alert(data)
	if (add_car_type != '' && add_car_license != '' && add_car_mileaga != '') {
		$.ajax({
			type: "POST",
			url: "modul/car/process/chk_add_car.php",
			cache: false,
			data: data,
			success: function(msg){
				alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_car();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function edit_car(car_id) {
	//alert(car_id)
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขรถ',
		message: $('<div></div>').load('modul/car/data/edit_car.php',{car_id:car_id}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				editcar_pro(car_id);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function editcar_pro(car_id) {
	var edit_car_type = $("#edit_car_type").val();
	var edit_car_license = $("#edit_car_license").val();
	var edit_car_mileaga = $("#edit_car_mileaga").val();
	var data = "edit_car_type=" + edit_car_type + "&edit_car_license=" + edit_car_license + "&edit_car_mileaga=" + edit_car_mileaga + "&car_id=" + car_id;
	if (edit_car_type != '' && edit_car_license != '' ) {
		$.ajax({
			type: "POST",
			url: "modul/car/process/chk_edit_car.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_car();
				}else if (msg=='N') {
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_car2();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function disabled_car(car_id,tcar_name,car_license,car_mileaga) {
	//alert(car_id + ',' + tcar_name + ',' + car_license + ',' + car_mileaga);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ปิดการใช้งานรถ',
		message: "คุณต้องการหยุดใช้งานรถ " + tcar_name + " ทะเบียน " + car_license + " เลขไมค์ " + car_mileaga + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var stratus = '3';
				var data = "car_id=" + car_id + "&stratus=" + stratus;
				$.ajax({
						url: "modul/car/process/chk_disable_car.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//a4lert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ยกเลิกใช้สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_car();
							}else if (msg=="N") {
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ยกเลิกใช้สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_car2();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function enable_car(car_id,tcar_name,car_license,car_mileaga) {
	//alert(car_id + ',' + tcar_name + ',' + car_license + ',' + car_mileaga);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		title: '<i class="fa fa-trash-o"></i> ปิดการใช้งานรถ',
		message: "คุณต้องการเปิดใช้งานรถ " + tcar_name + " ทะเบียน " + car_license + " เลขไมค์ " + car_mileaga + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				var stratus = '2';
				var data = "car_id=" + car_id + "&stratus=" + stratus;
				$.ajax({
						url: "modul/car/process/chk_disable_car.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//a4lert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ยกเลิกใช้สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_car();
							}else if (msg=="N") {
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ยกเลิกใช้สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_car2();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

//------------------------------ พนักงาน

function add_preple() {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มพนักงาน',
		message: $('<div></div>').load('modul/personnel/data/add_personnel.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				addpreple_pro();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function addpreple_pro() {
	var add_perso_code = $("#add_perso_code").val();
	var add_perso_name = $("#add_perso_name").val();
	var add_perso_provi = $("#add_perso_provi").val();
	var add_perso_bran = $("#add_perso_bran").val();
	var add_perso_dep = $("#add_perso_dep").val();
	var add_perso_posi = $("#add_perso_posi").val();
	var add_perso_minwage = $("#add_perso_minwage").val();

	var data = "add_perso_code=" + add_perso_code + "&add_perso_name=" + add_perso_name + "&add_perso_provi=" + add_perso_provi;
	data += "&add_perso_bran=" + add_perso_bran + "&add_perso_dep=" + add_perso_dep + "&add_perso_posi=" + add_perso_posi + "&add_perso_minwage=" +add_perso_minwage;

	if (add_perso_code != '' && add_perso_name != '' && add_perso_provi != '' && add_perso_bran != '' && add_perso_dep != '' && add_perso_posi != '' && add_perso_minwage != '') {
		$.ajax({
			type: "POST",
			url: "modul/personnel/process/chk_add_personal.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_preple2();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "มีในระบบแล้ว",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function edit_preple(psn_id) {
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_WARNING,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-gear"></i> แก้ไขพนักงาน',
		message: $('<div></div>').load('modul/personnel/data/edit_personnel.php',{psn_id : psn_id}),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-warning',
			action: function(dialogItself){
				editpreple_pro(psn_id);
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function editpreple_pro(psn_id) {
	var edit_perso_code = $("#edit_perso_code").val();
	var edit_perso_name = $("#edit_perso_name").val();
	var edit_perso_provi = $("#edit_perso_provi").val();
	var edit_perso_bran = $("#edit_perso_bran").val();
	var edit_perso_dep = $("#edit_perso_dep").val();
	var edit_perso_posi = $("#edit_perso_posi").val();
	var edit_perso_minwage = $("#edit_perso_minwage").val();

	var data = "edit_perso_code=" + edit_perso_code + "&edit_perso_name=" + edit_perso_name + "&edit_perso_provi=" + edit_perso_provi;
	data += "&edit_perso_bran=" + edit_perso_bran + "&edit_perso_dep=" + edit_perso_dep + "&edit_perso_posi=" + edit_perso_posi;
	data += "&edit_perso_minwage=" + edit_perso_minwage + "&psn_id=" + psn_id;

	if (edit_perso_provi != '' && edit_perso_bran != '' && edit_perso_dep != '' && edit_perso_posi != '' && edit_perso_minwage != '') {
		$.ajax({
			type: "POST",
			url: "modul/personnel/process/chk_edit_personal.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				if(msg=='Y'){
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
					show_preple();
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "มีในระบบแล้ว",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else {
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

function disabled_preple(psn_id,psn_name) {
	//alert(iddel + ',' + name);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_DANGER,
		title: '<i class="fa fa-trash-o"></i> ปิดใช้งานพนักงาน',
		message: "คุณต้องการปิดใช้งาน พนักงานชื่อ " + psn_name + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-danger',
			action: function(dialogItself){
				var data = "psn_id=" + psn_id;
				$.ajax({
						url: "modul/personnel/process/chk_disable_personal.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "ปิดใช้งานพนักงานสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_preple();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ปิดใช้งานพนักงานไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

function enable_preple(psn_id,psn_name) {
	//alert(iddel + ',' + name);
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		title: '<i class="fa fa-trash-o"></i> ปิดใช้งานพนักงาน',
		message: "คุณต้องการปิดใช้งาน พนักงานชื่อ " + psn_name + " ? ",
		buttons: [{
			label: 'Yes',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				var data = "psn_id=" + psn_id;
				$.ajax({
						url: "modul/personnel/process/chk_enable_personal.php",
						dataType: "html",
						type: 'POST', //I want a type as POST
						data: data,
						success: function(msg){
							//alert(msg);
							if(msg=="Y"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "เปิดใช้งานพนักงานสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_preple();
							}else if(msg=="N"){
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_SUCCESS,
									title: 'Success',
									message: "เปิดใช้งานพนักงานสำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
								show_preple2();
							}else{
								dialogItself.close();
								BootstrapDialog.show({
									type:BootstrapDialog.TYPE_DANGER,
									title: 'Error',
									message: "ลบข้อมูลไม่สำเร็จ",
									buttons: [{
										label: 'Close',
										action: function(dialogItself){
											dialogItself.close();
										}
									}],
									draggable: true,
									closable:false
								});
							}
						},
						error: function() {
							dialogItself.close();
							 BootstrapDialog.show({
								type:BootstrapDialog.TYPE_WARNING,
								title: 'Error',
								message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
								buttons: [{
									label: 'Close',
									action: function(dialogItself){
										dialogItself.close();
									}
								}],
								draggable: true,
								closable:false
							});
						}
					});
			}
		}, {
			label: 'No',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}

//-------------------------- รายการปฏิบัติงาน ตามบิล

function add_wage() {		//
	BootstrapDialog.show({
		type: BootstrapDialog.TYPE_INFO,
		size: BootstrapDialog.SIZE_WIDE,
		title: '<i class="fa fa-plus-circle"></i> เพิ่มการปฏิบัติงาน',
		message: $('<div></div>').load('modul/wage/data/add_operate.php'),
		buttons: [{
			label: 'บันทึก',
			// no title as it is optional
			cssClass: 'btn-info',
			action: function(dialogItself){
				//testhd();
				addoperatehd();
				//addoperate();
				dialogItself.close();
			}
		}, {
			label: 'ยกเลิก',
			action: function(dialogItself){
				dialogItself.close();
			}
		}],
		draggable: true,
		closable:false
	});
}


function testhd() {
	var bill_number = $("#bill_number").val();
	testprod(bill_number)
}

function testprod(bill_number) {
	var nn = $("#nn").val();
	var barcode = [];
	for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
	if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า
		barcode = $("#barcode"+i).val();
		if ($('#wage1_1').is(':checked')) {
			if ($('#liftse10').val() != '0') {
				var numpreple = 10;
			}else if ($('#liftse9').val() != '0') {
				var numpreple = 9;
			}else if ($('#liftse8').val() != '0') {
				var numpreple = 8;
			}else if ($('#liftse7').val() != '0') {
				var numpreple = 7;
			}else if ($('#liftse6').val() != '0') {
				var numpreple = 6;
			}else if ($('#liftse5').val() != '0') {
				var numpreple = 5;
			}else if ($('#liftse4').val() != '0') {
				var numpreple = 4;
			}else if ($('#liftse3').val() != '0') {
				var numpreple = 3;
			}else if ($('#liftse2').val() != '0') {
				var numpreple = 2;
			}else if ($('#liftse1').val() != '0') {
				var numpreple = 1;
			}
			alert(i);
				testpre(bill_number,barcode,numpreple);
		}else if ($('#wage1_2').is(':checked')) {
			if ($('#liftse4'+i).val() != '0') {
				var numpreple = 4;
			}else if ($('#liftse3'+i).val() != '0') {
				var numpreple = 3;
			}else if ($('#liftse2'+i).val() != '0') {
				var numpreple = 2;
			}else if ($('#liftse1'+i).val() != '0') {
				var numpreple = 1;
			}
				testpre(bill_number,barcode,numpreple,i);
			/*	var liftse = [];
				for (var b = 1; b <= numpreple; b++) {
					liftse = $('#liftse'+b+i).val();
			}
					alert(barcode+' , '+liftse);*/
		}
		}
	}
}

function testpre(bill_number,barcode,numpreple) {
	if ($('#wage1_1').is(':checked')) {
	var liftse = [];
	for (var i = 1; i <= numpreple; i++) {
		liftse = $('#liftse'+i).val();
		alert(barcode+' , '+liftse);
	}
}else if ($('#wage1_2').is(':checked')) {
	var liftse = [];
	for (var b = 1; b <= numpreple; b++) {
		liftse = $('#liftse'+b+i).val();

		alert(barcode+' , '+liftse);
	}
}
}






function checkbill(n) {
	//alert('009611112004');
	if (window.event.keyCode == 13){ //Enter
		//alert("Enter");
		if( (n=="bill_number") && ($('#bill_number').val() != '') ){
			$("#bill").removeClass('has-error');
		load_bill_number();
	}else {
		$("#bill_number").focus();
		$("#bill").addClass('has-error');
		}
	}
}

function load_bill_number() {	//ค้นหาเลขที่บิล
	var bill_number = $("#bill_number").val();
	if ($('#mt').is(':checked')) {
		var server_bran = 1;
	}else if ($('#y1').is(':checked')) {
		var server_bran = 2;
	}else if ($('#y2').is(':checked')) {
		var server_bran = 3;
	}else if ($('#y6').is(':checked')) {
		var server_bran = 4;
	}else if ($('#y7').is(':checked')) {
		var server_bran = 5;
	}else {
		var server_bran = 6;
	}

	if ($('#win').is(':checked')) {
		var server_prog = 1;
	}else if ($('#pos').is(':checked')) {
		var server_prog = 2;
	}else {
		var server_prog = 3;
	}
	$("#detail").load("modul/wage/data/load_bill.php",{ bill_number : bill_number, server_bran:server_bran, server_prog:server_prog});
}

function addoperatehd() {
	var bill_number = $("#bill_number").val();
	var brand = '';
	var program = '';
	var wage = '';
	var send = '';
	//สาขา
	if ($('#mt').is(':checked')) {
		brand = 1;
	}else if ($('#y1').is(':checked')) {
		brand = 2;
	}else if ($('#y2').is(':checked')) {
		brand = 3;
	}else if ($('#y6').is(':checked')) {
		brand = 4;
	}else if ($('#y7').is(':checked')) {
		brand = 5;
	}else{
		brand = 6;
	}
	//บิล
	if ($('#pos').is(':checked')) {
		program = 2;
	}else if ($('#win').is(':checked')) {
		program = 1;
	}else{
		program = 3;
	}
	//รอบจ่าย
	if ($('#wage1').is(':checked')) {
		wage = 1;
	}else if ($('#wage2').is(':checked')) {
		wage = 2;
	}else {
		wage = 3;
	}

	if ($('#send1').is(':checked')) {
		send = 1;	//ในบริษัท
	}else if ($('#send2').is(':checked')) {
		send = 2;	//นอกบริษัท
	}else {
		send = 3;	//ยังไม่ได้เลือก
	}

	var add_date_send = $('#add_date_send').val();
	var add_time_send = $('#add_time_send').val();
	var add_cusname_send = $('#add_cusname_send').val();


	if (send == 1) {	//ส่งในบริษัท
		 many = '';
		if ($('#wage1_1').is(':checked')) {	//ยกแผนกเดียว
			//alert('wage_1_1')
			var many = 1;
				var data = "brand=" + brand + "&program=" + program + "&bill_number=" + bill_number + "&wage=" + wage + "&send=" + send + "&add_date_send=" + add_date_send + "&add_time_send=" + add_time_send + "&add_cusname_send=" + add_cusname_send + "&many=" + many;
			if(brand != '' && program != '' && bill_number != '' && wage != '' && send != '' && add_date_send != '' && add_time_send != '' && many != '' && add_cusname_send != ''){
				//alert(data);
			$.ajax({
				type: "POST",
				url: "modul/wage/process/chk_add_send_hd.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					var data = msg.split(",");
					if(data[0] == 'Y'){
						var hd_id = data[1];
						var bill_number = data[2];
						//alert(hd_id)
						addoperateprod_wage1_1(hd_id,bill_number);
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else{
				BootstrapDialog.show({
					type:BootstrapDialog.TYPE_WARNING,
					title: 'Error',
					message: "กรุณากรอกข้อมูลให้ครบ",
					buttons: [{
						label: 'Close',
						action: function(dialogItself){
							dialogItself.close();
						}
					}],
					draggable: true,
					closable:false
				});
			}

		}else if ($('#wage1_2').is(':checked')) {	//ยกหลายแผนก
			//alert('wage_1_2')
			var many = 2;
			var data = "brand=" + brand + "&program=" + program + "&bill_number=" + bill_number + "&wage=" + wage + "&send=" + send + "&add_date_send=" + add_date_send + "&add_time_send=" + add_time_send + "&add_cusname_send=" + add_cusname_send + "&many=" + many;
			//alert(data)
		if(brand != '' && program != '' && bill_number != '' && wage != '' && send != '' && add_date_send != '' && add_time_send != '' && many != '' && add_cusname_send != ''){
				//alert(data);
			$.ajax({
				type: "POST",
				url: "modul/wage/process/chk_add_send_hd.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					var data = msg.split(",");
					if(data[0] == 'Y'){
						var hd_id = data[1];
						var bill_number = data[2];
						//alert(hd_id)
						addoperateprod_wage1_2(hd_id,bill_number);
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_ratproduct();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else{
				BootstrapDialog.show({
					type:BootstrapDialog.TYPE_WARNING,
					title: 'Error',
					message: "กรุณากรอกข้อมูลให้ครบ",
					buttons: [{
						label: 'Close',
						action: function(dialogItself){
							dialogItself.close();
						}
					}],
					draggable: true,
					closable:false
				});
			}

		}else {
			alert('Not send')
			var many = 3;	//ยังไม่ได้เลือก
		}

	}else if (send == 2) {	//ส่งนอกบริษัท
		var add_date_send = $('#add_date_send').val();	//วันที่
		var add_time_send = $('#add_time_send').val();	//เวลา
		var add_cusname_send = $('#add_cusname_send').val();	//ชื่อลูกค้า

		var data = "brand=" + brand + "&program=" + program + "&bill_number=" + bill_number + "&wage=" + wage + "&send=" + send + "&add_date_send=" + add_date_send + "&add_time_send=" + add_time_send + "&add_cusname_send=" + add_cusname_send;
		//alert(data);
		if(brand != '' && program != '' && bill_number != '' && wage != '' && send != '' && add_date_send != '' && add_time_send != '' && many != '' && add_cusname_send != ''){
			//alert(data);
		$.ajax({
			type: "POST",
			url: "modul/wage/process/chk_add_send_hd.php",
			cache: false,
			data: data,
			success: function(msg){
				//alert(msg);
				var data = msg.split(",");
				if(data[0] == 'Y'){
					var hd_id = data[1];
					var bill_number = data[2];
					//alert(hd_id)
					addoperatrprod_wage2(hd_id,bill_number);
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_SUCCESS,
						title: 'Success',
						message: "บันทึกข้อมูลสำเร็จ",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}else{
					BootstrapDialog.show({
						type:BootstrapDialog.TYPE_DANGER,
						title: 'Error',
						message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
						buttons: [{
							label: 'Close',
							action: function(dialogItself){
								dialogItself.close();
							}
						}],
						draggable: true,
						closable:false
					});
				}
			},
			error: function(){
				//
			},
			complete: function(){
				//
			}
		});
	}else{
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}

	}else {		//ยังไม่เลือกการส่ง
		alert('ยังไม่ได้เลือก')
	}
}

function addoperatrprod_wage2(hd_id,bill_number) {

}

function addoperateprod_wage1_1(hd_id,bill_number) {
	//alert(hd_id)
	var nn = $("#nn").val();
	var barcode = [];
	var qty = [];
	var price = [];
	var amnt = [];
	var ratp = [];
	var left = [];
	var sumrat = [];
	var pay = '';
	var liftse = [];
	var status = [];
	if ($('#wage1').is(':checked')) {
		pay = 1;
	}else if ($('#wage2').is(':checked')) {
		pay = 2;
	}
	//alert(nn)
	for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
	if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า
		status = 1;
	}else {
		status = 0;
	}
	//alert(status)
			if ($('#liftse10').val() != '0') {
				var numpreple = 10;
			}else if ($('#liftse9').val() != '0') {
				var numpreple = 9;
			}else if ($('#liftse8').val() != '0') {
				var numpreple = 8;
			}else if ($('#liftse7').val() != '0') {
				var numpreple = 7;
			}else if ($('#liftse6').val() != '0') {
				var numpreple = 6;
			}else if ($('#liftse5').val() != '0') {
				var numpreple = 5;
			}else if ($('#liftse4').val() != '0') {
				var numpreple = 4;
			}else if ($('#liftse3').val() != '0') {
				var numpreple = 3;
			}else if ($('#liftse2').val() != '0') {
				var numpreple = 2;
			}else if ($('#liftse1').val() != '0') {
				var numpreple = 1;
			}

			for (var c = 1; c <= numpreple; c++) {
				liftse[c] = $('#liftse'+c).val();

			}
				barcode = $('#barcode'+i).val();
				qty = parseFloat($('#qty'+i).val().replace(/,/g, ''));
				price = parseFloat($('#price'+i).val().replace(/,/g, ''));
				amnt = parseFloat($('#amnt'+i).val().replace(/,/g, ''));
				ratp = parseFloat($('#ratp'+i).val().replace(/,/g, ''));
				left = 1;

		$.post("modul/wage/process/chk_add_send_product_wage1.php",
      {
          barcode : barcode,
					qty : qty,
					price : price,
					amnt : amnt,
					left : left,
					hd_id : hd_id,
					ratp : ratp,
					numpreple : numpreple,
					status : status,
					bill_number : bill_number
      },
      function(msg){
				//alert(msg)
				var data = msg.split(",");
				if(data[0] == 'Y'){
				var prod_id = data[1];
				var qty2 = data[2];
				var price2 = data[3];
				var ratp2 = data[4];
				var numpreple2 = data[5];
				var status2 = data[6];
				if (status2 == 1) {
				for (var c2 = 1; c2 <= numpreple; c2++) {
					var sumratsend = 0;
					if (ratp2 == 0.003) {
						sumratsend = ((price2 * qty2) * ratp2) / numpreple2;
					}else {
						sumratsend = (ratp2 * qty2) / numpreple2;
					}
					$.post("modul/wage/process/chk_add_send_preple_wage1.php",
			      {
			          liftse : liftse[c2],
								hd_id : hd_id,
								prod_id : prod_id,
								pay : pay,
								sumrat : sumratsend
			      },
			      function(msg1){
							//alert(msg1)
							if(msg1 == 'Y'){
							show_personnel();
					}
				});

				}
			}
		}
      });
	}
}


function addoperateprod_wage1_2(hd_id,bill_number) {
	//alert(hd_id+' , '+bill_number)
	var nn = $("#nn").val();
	var barcode = [];
	var qty = [];
	var price = [];
	var amnt = [];
	var ratp = [];
	var left = [];
	var sumrat = [];
	var pay = '';
	var liftse = [];
	var status = [];
	var numpreple = [];
	if ($('#wage1').is(':checked')) {
		pay = 1;
	}else if ($('#wage2').is(':checked')) {
		pay = 2;
	}
	//alert(nn)
	for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
	if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า
		status = 1;
	}else {
		status = 0;
	}
	//alert(status)
	if ($('#liftse4'+i).val() != "0") {
		numpreple = 4;
	}else if ($('#liftse3'+i).val() != "0") {
		numpreple = 3;
	}else if ($('#liftse2'+i).val() != "0") {
		numpreple = 2;
	}else if ($('#liftse1'+i).val() != "0") {
		numpreple = 1;
	}

		alert(numpreple)
			for (var c = 1; c <= numpreple; c++) {

			}

				barcode = $('#barcode'+i).val();
				qty = parseFloat($('#qty'+i).val().replace(/,/g, ''));
				price = parseFloat($('#price'+i).val().replace(/,/g, ''));
				amnt = parseFloat($('#amnt'+i).val().replace(/,/g, ''));
				ratp = parseFloat($('#ratp'+i).val().replace(/,/g, ''));
				left = 1;
				//alert(i)
				//alert(barcode+' , '+qty+' , '+price+' , '+amnt+' , '+ratp+' , '+left)
		$.post("modul/wage/process/chk_add_send_product_wage2.php",
      {
          barcode : barcode,
					qty : qty,
					price : price,
					amnt : amnt,
					left : left,
					hd_id : hd_id,
					ratp : ratp,
					numpreple : numpreple,
					status : status,
					bill_number : bill_number,
					i : i
      },
      function(msg){
				//alert(msg)
				var data = msg.split(",");
				if(data[0] == 'Y'){
				var prod_id = data[1];
				var qty2 = data[2];
				var price2 = data[3];
				var ratp2 = data[4];
				var numpreple2 = data[5];
				var status2 = data[6];
				var i2 = data[7];
				alert(numpreple2)
				if (status2 == 1) {

					addpreple_wage1_2(prod_id,qty2,price2,ratp2,numpreple2,status2,hd_id,i2,pay);

			}
		}
	});
	}
}

function addpreple_wage1_2(prod_id,qty2,price2,ratp2,numpreple2,status2,hd_id,i2,pay) {
	alert(hd_id+' , '+numpreple2+' , '+i2)
	var liftse = [];
	if ($('#liftse4'+i2).val() != "0") {
		var numpreple = 4;
	}else if ($('#liftse3'+i2).val() != "0") {
		var numpreple = 3;
	}else if ($('#liftse2'+i2).val() != "0") {
		var numpreple = 2;
	}else if ($('#liftse1'+i2).val() != "0") {
		var numpreple = 1;
	}
	for (var c2 = 1; c2 <= numpreple2; c2++) {
		liftse[c2] = $('#liftse'+c2+i2).val();
		//alert(liftse[c2]);
		var sumratsend = 0;
		if (ratp2 == 0.003) {
			sumratsend = ((price2 * qty2) * ratp2) / numpreple2;
		}else {
			sumratsend = (ratp2 * qty2) / numpreple2;
		}
		//alert(liftse[c])
		$.post("modul/wage/process/chk_add_send_preple_wage1.php",
			{
					liftse : liftse[c2],
					hd_id : hd_id,
					prod_id : prod_id,
					pay : pay,
					sumrat : sumratsend
			},
			function(msg1){
				alert(msg1)
				if(msg1 == 'Y'){
				show_personnel();
		}
	});
	}
}


function addoperate() {		//บันทึกข้อมูลกรอกค่าแรง
	var nn = $("#nn").val();
	var liftse = [];
	var prepleaction = [];

if ($('#send2').is(':checked')) { // เลือก ส่งนอกบริษัท
	//if ($('#yok1').is(':checked')) {	// คนขับช่วยยก
		if ($('#driving').val() != '0') {
			if ($('#liftse10').val() != '0') {
				var numpreple = 11;
			}else if ($('#liftse9').val() != '0') {
				var numpreple = 10;
			}else if ($('#liftse8').val() != '0') {
				var numpreple = 9;
			}else if ($('#liftse7').val() != '0') {
				var numpreple = 8;
			}else if ($('#liftse6').val() != '0') {
				var numpreple = 7;
			}else if ($('#liftse5').val() != '0') {
				var numpreple = 6;
			}else if ($('#liftse4').val() != '0') {
				var numpreple = 5;
			}else if ($('#liftse3').val() != '0') {
				var numpreple = 4;
			}else if ($('#liftse2').val() != '0') {
				var numpreple = 3;
			}else if ($('#liftse1').val() != '0') {
				var numpreple = 2;
			}
		}/*else {
			if ($('#liftse10').val() != '0') {
				var numpreple = 10;
			}else if ($('#liftse9').val() != '0') {
				var numpreple = 9;
			}else if ($('#liftse8').val() != '0') {
				var numpreple = 8;
			}else if ($('#liftse7').val() != '0') {
				var numpreple = 7;
			}else if ($('#liftse6').val() != '0') {
				var numpreple = 6;
			}else if ($('#liftse5').val() != '0') {
				var numpreple = 5;
			}else if ($('#liftse4').val() != '0') {
				var numpreple = 4;
			}else if ($('#liftse3').val() != '0') {
				var numpreple = 3;
			}else if ($('#liftse2').val() != '0') {
				var numpreple = 2;
			}else if ($('#liftse1').val() != '0') {
				var numpreple = 1;
			}
		}*/
	/*}else if ($('#yok2').is(':checked')) {
		if ($('#liftse10').val() != '0') {
			var numpreple = 10;
		}else if ($('#liftse9').val() != '0') {
			var numpreple = 9;
		}else if ($('#liftse8').val() != '0') {
			var numpreple = 8;
		}else if ($('#liftse7').val() != '0') {
			var numpreple = 7;
		}else if ($('#liftse6').val() != '0') {
			var numpreple = 6;
		}else if ($('#liftse5').val() != '0') {
			var numpreple = 5;
		}else if ($('#liftse4').val() != '0') {
			var numpreple = 4;
		}else if ($('#liftse3').val() != '0') {
			var numpreple = 3;
		}else if ($('#liftse2').val() != '0') {
			var numpreple = 2;
		}else if ($('#liftse1').val() != '0') {
			var numpreple = 1;
		}
	}*/
	var barcode = [];
	var name = [];
	var qty = [];
	var price = [];
	var amnt = [];
	var n8 = [];
	var n9 = [];
	var check = [];
	var pay = [];
	for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
	if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า
		barcode = $("#barcode"+i).val();
		name = $("#name"+i).val();
		qty = $("#qty"+i).val();
		price = $("#price"+i).val();
		amnt = $("#amnt"+i).val();
		//alert(barcode+' , '+name+' , '+qty+' , '+price+' , '+amnt);
		var data = "barcode=" + barcode + "&name=" + name + "&qty=" + qty + "&price=" + price + "&amnt=" + amnt;
		alert(data);
		}
	}

}else {
	//alert("send in");
/*	if ($('#wage1_1').is(':checked')) { //เลือกส่งในบริษัท แต่แผนกเดียว
		//alert('ttt')
		var barcode = [];
		var name = [];
		var qty = [];
		var price = [];
		var amnt = [];
		var n8 = [];
		var n9 = [];
		var check = [];
		var pay = [];
		for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
		if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า
			barcode = $("#barcode"+i).val();
			name = $("#name"+i).val();
			qty = $("#qty"+i).val();
			price = $("#price"+i).val();
			amnt = $("#amnt"+i).val();
			//alert(barcode+' , '+name+' , '+qty+' , '+price+' , '+amnt);
			var data = "barcode=" + barcode + "&name=" + name + "&qty=" + qty + "&price=" + price + "&amnt=" + amnt;
			alert(i+' , '+data);
			}
		}
		//alert("TT")
		var n1 = [];
		var n2 = [];
		var n3 = [];
		var n6 = [];
		var n7 = [];
		var n8 = [];
		var n9 = [];
		var check = [];
		var pay = [];
		for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
			//alert(i)
		if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า
		 n1[i] = $("#n"+i).val();
		 n2[i] = $("#b"+i).val();
 		 n6[i] = $("#d"+i).val();
		 n7[i] = $("#d2"+i).val();
		 n8[i] = $("#d3"+i).val();
		 n9[i] = $("#d4"+i).val();
		 pay[i] = $("#payoff"+i).val();
		 //alert(pay[i]);
		 if ($('#liftse10').val() != '0') {
			 var numpreple = 10;
		 }else if ($('#liftse9').val() != '0') {
			 var numpreple = 9;
		 }else if ($('#liftse8').val() != '0') {
			 var numpreple = 8;
		 }else if ($('#liftse7').val() != '0') {
			 var numpreple = 7;
		 }else if ($('#liftse6').val() != '0') {
			 var numpreple = 6;
		 }else if ($('#liftse5').val() != '0') {
			 var numpreple = 5;
		 }else if ($('#liftse4').val() != '0') {
			 var numpreple = 4;
		 }else if ($('#liftse3').val() != '0') {
			 var numpreple = 3;
		 }else if ($('#liftse2').val() != '0') {
			 var numpreple = 2;
		 }else if ($('#liftse1').val() != '0') {
			 var numpreple = 1;
		 }
		 //alert(numpreple)
	 if ($('#e'+i).is(':checked') && $('#f'+i).is(':checked')) {
			check[i] = 3;
			n3[i] = ($("#c"+i).val()/numpreple)*2;
		 //alert("test4 - 5");
	 }else if ($('#e'+i).is(':checked')) {
			check[i] = 1;
			n3[i] = ($("#c"+i).val()/numpreple)*1;
		 //alert("test4");
	 }else if ($('#f'+i).is(':checked')) {
			check[i] = 2;
			n3[i] = ($("#c"+i).val()/numpreple)*1;
		 //alert("test5");
	 }

			for (var b = 1; b <= 10; b++) {
				if ($('#liftse'+b).val() != '0') {
					liftse[b] = $('#liftse'+b).val();
					prepleaction[b] = b;
				}

				if ($('#payoff'+i).is(':checked') && $('#liftse'+b).val() != '0') {
					alert(n1[i] + " , " + n2[i] + " , " + n3[i] + " , " + check[i] + " , " + n6[i] + " , " + n7[i] + " , " + n8[i] + " , " + n9[i] + " , " + pay[i] + " , " + liftse[b] + " , " + prepleaction[b]);
					//data = "=" +  + "&=" +  + ;
					$.ajax({
						type: "POST",
						url: "modul/wage/process/add_send1_1_pro.php",
						cache: false,
						//data: data,
						success: function(msg){
			//alert(msg);
					if(msg=='Y'){
						alert(msg)
        		//$("#").load("");
					}else{
						Lobibox.alert("error", //AVAILABLE TYPES: "error", "info", "success", "warning"
						{
							msg: msg
						});
			  		}
		  		}
    		});

				//alert(liftse[b]);
					}
				}
			}
		}*/
	/*}else if ($('#wage1_2').is(':checked')) { //เลือกส่งในบริษัท แต่หลายแผนก
		var n1 = [];
		var n2 = [];
		var n3 = [];
		var n6 = [];
		var n7 = [];
		var n8 = [];
		var n9 = [];
		var check = [];
		var pay = [];
		for(var i = 1 ; i <= nn ; i++) {	// ลูปสินค้า
		if ($('#payoff'+i).is(':checked')) {	// เช็คส่งสินค้า

			}
		}
	}*/
}


	//alert(numpreple);

/*	var n1 = [];
	var n2 = [];
	var n3 = [];
	var n6 = [];
	var n7 = [];
	var n8 = [];
	var n9 = [];
	var check = [];
	var pay = [];
	for(var i = 1 ; i <= nn ; i++) {
		if ($('#payoff'+i).is(':checked')) {
			 n1[i] = $("#n"+i).val();
			 n2[i] = $("#b"+i).val();

 			 n6[i] = $("#d"+i).val();
		 n7[i] = $("#d2"+i).val();
		 n8[i] = $("#d3"+i).val();
		 n9[i] = $("#d4"+i).val();
		 pay[i] = $("#payoff"+i).val();
		 if ($('#wage1_1').is(':checked')) {
 			if ($('#liftse10').val() != '0') {
 				var numpreple = 10;
 			}else if ($('#liftse9').val() != '0') {
 				var numpreple = 9;
 			}else if ($('#liftse8').val() != '0') {
 				var numpreple = 8;
 			}else if ($('#liftse7').val() != '0') {
 				var numpreple = 7;
 			}else if ($('#liftse6').val() != '0') {
 				var numpreple = 6;
 			}else if ($('#liftse5').val() != '0') {
 				var numpreple = 5;
 			}else if ($('#liftse4').val() != '0') {
 				var numpreple = 4;
 			}else if ($('#liftse3').val() != '0') {
 				var numpreple = 3;
 			}else if ($('#liftse2').val() != '0') {
 				var numpreple = 2;
 			}else if ($('#liftse1').val() != '0') {
 				var numpreple = 1;
 			}
		if ($('#e'+i).is(':checked') && $('#f'+i).is(':checked')) {
			 check[i] = 3;
			 n3[i] = ($("#c"+i).val()/numpreple)*2;
			//alert("test4 - 5");
		}else if ($('#e'+i).is(':checked')) {
			 check[i] = 1;
			 n3[i] = ($("#c"+i).val()/numpreple)*1;
			//alert("test4");
		}else if ($('#f'+i).is(':checked')) {
			 check[i] = 2;
			 n3[i] = ($("#c"+i).val()/numpreple)*1;
			//alert("test5");
		}

	}else if ($('#wage1_2').is(':checked')) {
			if ($('#liftse4'+i).val() != '0') {
				var numpreple2 = 4;
				//alert(numpreple2);
			}else if ($('#liftse3'+i).val() != '0') {
				var numpreple2 = 3;
				//alert(numpreple2);
			}else if ($('#liftse2'+i).val() != '0') {
				var numpreple2 = 2;
				//alert(numpreple2);
			}else if ($('#liftse1'+i).val() != '0') {
				var numpreple2 = 1;
				//alert(numpreple2);
			}

			alert(numpreple2)
			if ($('#liftse1'+i).val() != '0' || $('#liftse2'+i).val() != '0' || $('#liftse3'+i).val() != '0' || $('#liftse4'+i).val() != '0') {
					n3[i] = $("#c"+i).val()/numpreple2;
			}

		}
	}
	if ($('#payoff'+i).is(':checked')) {
			alert(n1[i] + " , " + n2[i] + " , " + n3[i] + " , " + check[i] + " , " + n6[i] + " , " + n7[i] + " , " + n8[i] + " , " + n9[i] + " , " + pay[i]);
	}


	var liftse = [];
	if ($('#wage1_2').is(':checked')) {
		for (var b = 1; b <= 4; w++) {

		}
	}else {
	//var numpreple = 0;
	for (var b = 1; b <= 10; b++) {
		//alert(b);
		if ($('#liftse'+b).val() != '0') {
			//alert($('#liftse'+b).val());
			liftse[b] = $('#liftse'+b).val();
			//numpreple = numpreple +1;
		}
		//alert(numpreple);

		if ($('#payoff'+i).is(':checked') && $('#liftse'+b).val() != '0') {
	alert(n1[i] + " , " + n2[i] + " , " + n3[i] + " , " + check[i] + " , " + n6[i] + " , " + n7[i] + " , " + n8[i] + " , " + n9[i] + " , " + pay[i] + " , " + liftse[b]);
		//alert(liftse[b]);
		}
	}
}
}*/


//alert(numpreple);
		//
}

	function update_back_wage() {		//
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_SUCCESS,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-plus-circle"></i> บันทึกรถกลับถึงบริษัท',
			message: $('<div></div>').load('modul/wage/data/edit_send2.php'),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-success',
				action: function(dialogItself){
					// function ที่จะทำงานต่อ
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function update_wage_send2() {		//
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_INFO,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-plus-circle"></i> บันทึกค่าแรงปฏิบัติงาน',
			message: $('<div></div>').load('modul/wage/data/edit_wage_send2.php'),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-info',
				action: function(dialogItself){
					// function ที่จะทำงานต่อ
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}


	function delete_wage() {
		//alert(iddel + ',' + name);
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_DANGER,
			title: '<i class="fa fa-trash-o"></i> ลบรายการปฏิบัติงาน',
			message: "คุณต้องการลบ " + "ทดสอบ" + " ? ",
			buttons: [{
				label: 'Yes',
				// no title as it is optional
				cssClass: 'btn-danger',
				action: function(dialogItself){
					dialogItself.close();
				}
			}, {
				label: 'No',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	//------------------------------ เลทสินค้า

	function add_ratproduct() {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_INFO,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-plus-circle"></i> เพิ่มเลทสินค้า',
			message: $('<div></div>').load('modul/ratproduct/data/add_ratproduct.php'),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-info',
				action: function(dialogItself){
					//addoperate();
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function edit_ratproduct1(pro_id) {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_WARNING,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-gear"></i>  แก้ไขเลทสินค้า',
			message: $('<div></div>').load('modul/ratproduct/data/edit_product.php',{ pro_id : pro_id}),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-warning',
				action: function(dialogItself){
					edit_pro(pro_id);
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function edit_ratproduct2(pro_id) {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_WARNING,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-gear"></i>  แก้ไขเลทสินค้า',
			message: $('<div></div>').load('modul/ratproduct/data/edit_ratproduct.php',{ pro_id : pro_id}),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-warning',
				action: function(dialogItself){
					edit_pro(pro_id);
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function edit_pro(pro_id) {
		//alert(pro_id);
	var product_code = $("#product_code").val();
	var product_name = $("#product_name").val();
	var product_unit = $("#product_unit").val();
	var product_rat = $("#product_rat").val();
	//alert("ทดสอบ" + statusue);
	var data = "product_code=" + product_code + "&product_name=" + product_name + "&product_unit=" + product_unit + "&product_rat=" + product_rat + "&pro_id=" + pro_id;
	//alert(data);
	if(product_rat != ''){
		//alert(data);
	$.ajax({
		type: "POST",
		url: "modul/ratproduct/process/edit_rat_product.php",
		cache: false,
		data: data,
		success: function(msg){
			//alert(msg);
			if(msg=='Y'){
				BootstrapDialog.show({
					type:BootstrapDialog.TYPE_SUCCESS,
					title: 'Success',
					message: "บันทึกข้อมูลสำเร็จ",
					buttons: [{
						label: 'Close',
						action: function(dialogItself){
							dialogItself.close();
						}
					}],
					draggable: true,
					closable:false
				});
				show_ratproduct();
			}else{
				BootstrapDialog.show({
					type:BootstrapDialog.TYPE_DANGER,
					title: 'Error',
					message: "บันทึกข้อมูลล้มเหลว กรุณาลองใหม่",
					buttons: [{
						label: 'Close',
						action: function(dialogItself){
							dialogItself.close();
						}
					}],
					draggable: true,
					closable:false
				});
			}
		},
		error: function(){
			//
		},
		complete: function(){
			//
		}
	});
}else{
		BootstrapDialog.show({
			type:BootstrapDialog.TYPE_WARNING,
			title: 'Error',
			message: "กรุณากรอกข้อมูลให้ครบ",
			buttons: [{
				label: 'Close',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}
}

	//------------------------------ เลทค่าวิ่ง

	function add_ratcar() {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_INFO,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-plus-circle"></i> เพิ่มเลทค่าระยะทาง',
			message: $('<div></div>').load('modul/ratcar/data/add_ratcar.php'),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-info',
				action: function(dialogItself){
					addratcar();
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function addratcar() {
		var rat_dri_car = $("#rat_dri_car").val();
		var rat_dri_distance = $("#rat_dri_distance").val();
		var rat_driver = $("#rat_driver").val();
		var data = "rat_dri_car=" + rat_dri_car + "&rat_dri_distance=" + rat_dri_distance + "&rat_driver=" + rat_driver;
		//alert(data);
		if (rat_dri_car != '' && rat_dri_distance != '' && rat_driver != '') {
			$.ajax({
				type: "POST",
				url: "modul/ratcar/process/chk_add_ratcar.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_ratcar();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "เลทค่าขับ มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}

	function edit_ratcar(driv_id) {
		//alert(driv_id)
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_WARNING,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-gear"></i> แก้ไขเลทค่าระยะทาง',
			message: $('<div></div>').load('modul/ratcar/data/edit_ratcar.php',{driv_id : driv_id}),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-warning',
				action: function(dialogItself){
					edit_ratcarpro(driv_id);
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function edit_ratcarpro(driv_id) {
		var edit_ratcar_tcar = $("#edit_ratcar_tcar").val();
		var edit_ratcar_dis = $("#edit_ratcar_dis").val();
		var edit_ratcar_name = $("#edit_ratcar_name").val();
		var data = "edit_ratcar_tcar=" + edit_ratcar_tcar + "&edit_ratcar_dis=" + edit_ratcar_dis + "&edit_ratcar_name=" + edit_ratcar_name + "&driv_id=" +driv_id;

		if (edit_ratcar_tcar != '' && edit_ratcar_dis != '' && edit_ratcar_name != '') {
			$.ajax({
				type: "POST",
				url: "modul/ratcar/process/chk_edit_ratcar.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_ratcar();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "เลทค่าขับ มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}

	function delete_ratcar(driv_id,tcar_name,dist_name,driv_name) {
		//alert(iddel + ',' + name);
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_DANGER,
			title: '<i class="fa fa-trash-o"></i> ลบเลทค่าขับ',
			message: "คุณต้องการลบเลทค่าขับรถ " + tcar_name + " ระยะทาง " + dist_name + " กิโลเมตร ค่าขับ " + driv_name + " บาท ? ",
			buttons: [{
				label: 'Yes',
				// no title as it is optional
				cssClass: 'btn-danger',
				action: function(dialogItself){
					var data = "driv_id=" + driv_id;
					$.ajax({
						  url: "modul/ratcar/process/chk_del_ratcar.php",
							dataType: "html",
							type: 'POST', //I want a type as POST
							data: data,
							success: function(msg){
								//alert(msg);
								if(msg=="Y"){
									dialogItself.close();
									BootstrapDialog.show({
										type:BootstrapDialog.TYPE_SUCCESS,
										title: 'Success',
										message: "ลบข้อมูลสำเร็จ",
										buttons: [{
											label: 'Close',
											action: function(dialogItself){
												dialogItself.close();
											}
										}],
										draggable: true,
										closable:false
									});
									show_ratcar();
								}else{
									dialogItself.close();
									BootstrapDialog.show({
										type:BootstrapDialog.TYPE_DANGER,
										title: 'Error',
										message: "ลบข้อมูลไม่สำเร็จ",
										buttons: [{
											label: 'Close',
											action: function(dialogItself){
												dialogItself.close();
											}
										}],
										draggable: true,
										closable:false
									});
								}
							},
							error: function() {
								dialogItself.close();
								 BootstrapDialog.show({
			 						type:BootstrapDialog.TYPE_WARNING,
			 						title: 'Error',
			 						message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
			 						buttons: [{
			 							label: 'Close',
			 							action: function(dialogItself){
			 								dialogItself.close();
			 							}
			 						}],
			 						draggable: true,
			 						closable:false
			 					});
							}
						});
				}
			}, {
				label: 'No',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	//--------------------------- รถ





	//----------------------------- USER

	function add_dep() {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_INFO,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-plus-circle"></i> เพิ่มแผนก',
			message: $('<div></div>').load('modul/depratment/data/add_depratment.php'),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-info',
				action: function(dialogItself){
					adddep_pro();
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function adddep_pro() {
		var add_dep_bran = $("#add_dep_bran").val();
		var add_dep_name = $("#add_dep_name").val();

		var data = "add_dep_bran=" + add_dep_bran + "&add_dep_name=" + add_dep_name;

		if (add_dep_bran != '' && add_dep_name != '') {
			$.ajax({
				type: "POST",
				url: "modul/depratment/process/chk_add_depratment.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_depratment();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "แผนก มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}

	function edit_dep(dep_id) {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_WARNING,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-gear"></i> แก้ไขแผนก',
			message: $('<div></div>').load('modul/depratment/data/edit_depratment.php',{dep_id : dep_id}),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-warning',
				action: function(dialogItself){
					editdep_pro(dep_id);
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function editdep_pro(dep_id) {
		var edit_dep_bran = $("#edit_dep_bran").val();
		var edit_dep_name = $("#edit_dep_name").val();

		var data = "edit_dep_bran=" + edit_dep_bran + "&edit_dep_name=" + edit_dep_name + "&dep_id=" + dep_id;

		if (edit_dep_bran != '' && edit_dep_name != '') {
			$.ajax({
				type: "POST",
				url: "modul/depratment/process/chk_edit_depratment.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_depratment();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "แผนก มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}

	function delete_dep(dep_id,dep_name) {
		//alert(iddel + ',' + name);
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_DANGER,
			title: '<i class="fa fa-trash-o"></i> ลบแผนก',
			message: "คุณต้องการลบ แผนก" + dep_name + " ? ",
			buttons: [{
				label: 'Yes',
				// no title as it is optional
				cssClass: 'btn-danger',
				action: function(dialogItself){
					var data = "dep_id=" + dep_id;
					$.ajax({
						  url: "modul/depratment/process/chk_del_depratment.php",
							dataType: "html",
							type: 'POST', //I want a type as POST
							data: data,
							success: function(msg){
								//alert(msg);
								if(msg=="Y"){
									dialogItself.close();
									BootstrapDialog.show({
										type:BootstrapDialog.TYPE_SUCCESS,
										title: 'Success',
										message: "ลบข้อมูลสำเร็จ",
										buttons: [{
											label: 'Close',
											action: function(dialogItself){
												dialogItself.close();
											}
										}],
										draggable: true,
										closable:false
									});
									show_depratment();
								}else{
									dialogItself.close();
									BootstrapDialog.show({
										type:BootstrapDialog.TYPE_DANGER,
										title: 'Error',
										message: "ลบข้อมูลไม่สำเร็จ",
										buttons: [{
											label: 'Close',
											action: function(dialogItself){
												dialogItself.close();
											}
										}],
										draggable: true,
										closable:false
									});
								}
							},
							error: function() {
								dialogItself.close();
								 BootstrapDialog.show({
			 						type:BootstrapDialog.TYPE_WARNING,
			 						title: 'Error',
			 						message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
			 						buttons: [{
			 							label: 'Close',
			 							action: function(dialogItself){
			 								dialogItself.close();
			 							}
			 						}],
			 						draggable: true,
			 						closable:false
			 					});
							}
						});
				}
			}, {
				label: 'No',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	//----------------------------- DEP

	function add_bran() {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_INFO,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-plus-circle"></i> เพิ่มสาขา',
			message: $('<div></div>').load('modul/bran/data/add_bran.php'),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-info',
				action: function(dialogItself){
					addbran_pro();
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function addbran_pro() {
		var add_bran_name_s = $("#add_bran_name_s").val();
		var add_bran_name_f = $("#add_bran_name_f").val();
		var add_bran_provi = $("#add_bran_provi").val();

		var data = "add_bran_name_s=" + add_bran_name_s + "&add_bran_name_f=" + add_bran_name_f + "&add_bran_provi=" + add_bran_provi;

		if (add_bran_name_s != '' && add_bran_name_f != '' && add_bran_provi != '') {
			$.ajax({
				type: "POST",
				url: "modul/bran/process/chk_add_bran.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_bran();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "สาขา มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}

	function edit_bran(bran_id) {
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_WARNING,
			size: BootstrapDialog.SIZE_WIDE,
			title: '<i class="fa fa-gear"></i> แก้ไขสาขา',
			message: $('<div></div>').load('modul/bran/data/edit_bran.php',{bran_id : bran_id}),
			buttons: [{
				label: 'บันทึก',
				// no title as it is optional
				cssClass: 'btn-warning',
				action: function(dialogItself){
					editbran_pro(bran_id);
					dialogItself.close();
				}
			}, {
				label: 'ยกเลิก',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	function editbran_pro(bran_id) {
		var edit_bran_name_s = $("#edit_bran_name_s").val();
		var edit_bran_name_f = $("#edit_bran_name_f").val();
		var edit_bran_provi = $("#edit_bran_provi").val();

		var data = "edit_bran_name_s=" + edit_bran_name_s + "&edit_bran_name_f=" + edit_bran_name_f + "&edit_bran_provi=" + edit_bran_provi + "&bran_id=" + bran_id;

		if (edit_bran_name_s != '' && edit_bran_name_f != '' && edit_bran_provi != '') {
			$.ajax({
				type: "POST",
				url: "modul/bran/process/chk_edit_bran.php",
				cache: false,
				data: data,
				success: function(msg){
					//alert(msg);
					if(msg=='Y'){
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_SUCCESS,
							title: 'Success',
							message: "บันทึกข้อมูลสำเร็จ",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
						show_bran();
					}else{
						BootstrapDialog.show({
							type:BootstrapDialog.TYPE_DANGER,
							title: 'Error',
							message: "สาขา มีในระบบแล้ว",
							buttons: [{
								label: 'Close',
								action: function(dialogItself){
									dialogItself.close();
								}
							}],
							draggable: true,
							closable:false
						});
					}
				},
				error: function(){
					//
				},
				complete: function(){
					//
				}
			});
		}else {
			BootstrapDialog.show({
				type:BootstrapDialog.TYPE_WARNING,
				title: 'Error',
				message: "กรุณากรอกข้อมูลให้ครบ",
				buttons: [{
					label: 'Close',
					action: function(dialogItself){
						dialogItself.close();
					}
				}],
				draggable: true,
				closable:false
			});
		}
	}

	function delete_bran(bran_id,bran_name) {
		//alert(iddel + ',' + name);
		BootstrapDialog.show({
			type: BootstrapDialog.TYPE_DANGER,
			title: '<i class="fa fa-trash-o"></i> ลบแผนก',
			message: "คุณต้องการลบ สาขา " + bran_name + " ? ",
			buttons: [{
				label: 'Yes',
				// no title as it is optional
				cssClass: 'btn-danger',
				action: function(dialogItself){
					var data = "bran_id=" + bran_id;
					$.ajax({
						  url: "modul/bran/process/chk_del_bran.php",
							dataType: "html",
							type: 'POST', //I want a type as POST
							data: data,
							success: function(msg){
								//alert(msg);
								if(msg=="Y"){
									dialogItself.close();
									BootstrapDialog.show({
										type:BootstrapDialog.TYPE_SUCCESS,
										title: 'Success',
										message: "ลบข้อมูลสำเร็จ",
										buttons: [{
											label: 'Close',
											action: function(dialogItself){
												dialogItself.close();
											}
										}],
										draggable: true,
										closable:false
									});
									show_bran();
								}else{
									dialogItself.close();
									BootstrapDialog.show({
										type:BootstrapDialog.TYPE_DANGER,
										title: 'Error',
										message: "ลบข้อมูลไม่สำเร็จ",
										buttons: [{
											label: 'Close',
											action: function(dialogItself){
												dialogItself.close();
											}
										}],
										draggable: true,
										closable:false
									});
								}
							},
							error: function() {
								dialogItself.close();
								 BootstrapDialog.show({
			 						type:BootstrapDialog.TYPE_WARNING,
			 						title: 'Error',
			 						message: "เกิดข้อผิดพลาดการติดต่อฐานข้อมูล",
			 						buttons: [{
			 							label: 'Close',
			 							action: function(dialogItself){
			 								dialogItself.close();
			 							}
			 						}],
			 						draggable: true,
			 						closable:false
			 					});
							}
						});
				}
			}, {
				label: 'No',
				action: function(dialogItself){
					dialogItself.close();
				}
			}],
			draggable: true,
			closable:false
		});
	}

	//----------------------------- BRAN
// --- End JavaScript Document  --- //

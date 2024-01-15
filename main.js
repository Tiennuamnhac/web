var object = {
    hoTen:"",
    soDienThoai:"",
    yeuCau: "",
    tenMonHang:"",
    tenNuocUong:"",
    giaTien:""
}


$("#btn-1").on("click", function(){
    // alert("Khach hang chon mua san pham 1 ")
    $("#btn-1").removeClass("btn-success").addClass("btn-warning")
    $("#btn-2").removeClass("btn-warning").addClass("btn-success")
    $("#btn-3").removeClass("btn-warning").addClass("btn-success")
    object.tenNuocUong = "mua mon hang so 1";
    object.giaTien="60.000 VND";
})
$("#btn-2").on("click", function(){
    // alert("Khach hang chon mua san pham 2 ")
    $("#btn-2").removeClass("btn-success").addClass("btn-warning")
    $("#btn-1").removeClass("btn-warning").addClass("btn-success")
    $("#btn-3").removeClass("btn-warning").addClass("btn-success")
    object.tenNuocUong = "mua mon hang so 2";
    object.giaTien="50.000 VND";
})
$("#btn-3").on("click", function(){
    // alert("Khach hang chon mua san pham 3")
    $("#btn-3").removeClass("btn-success").addClass("btn-warning")
    $("#btn-1").removeClass("btn-warning").addClass("btn-success")
    $("#btn-2").removeClass("btn-warning").addClass("btn-success")
    object.tenNuocUong = "mua mon hang so 3";
    object.giaTien="40.000 VND"
})
$("#btn-4").on("click", function(){
    if(checkInfor(object))
    console.log(object)
})
$("#btn-lau1").on("click", function(){
    // alert("Khach hang chon mua san pham 1 ")
  alert ("Lưu ý: quý khách ghi chú mức giá tại mục lời nhắn ")
    $("#btn-lau1").removeClass("btn-success").addClass("btn-warning")
    $("#btn-lau2").removeClass("btn-warning").addClass("btn-success")
    $("#btn-lau3").removeClass("btn-warning").addClass("btn-success")
 
    object.tenMonHang = "mua lau truyen thong";
  
})
$("#btn-lau2").on("click", function(){
    // alert("Khach hang chon mua san pham 1 ")
    alert ("Lưu ý: quý khách ghi chú mức giá tại mục lời nhắn ")
    $("#btn-lau2").removeClass("btn-success").addClass("btn-warning")
    $("#btn-lau1").removeClass("btn-warning").addClass("btn-success")
    $("#btn-lau3").removeClass("btn-warning").addClass("btn-success")
 
    object.tenMonHang = "mua lau suon";
  
})
$("#btn-lau3").on("click", function(){
    // alert("Khach hang chon mua san pham 1 ")
    alert ("Lưu ý: quý khách ghi chú mức giá tại mục lời nhắn ")
    $("#btn-lau3").removeClass("btn-success").addClass("btn-warning")
    $("#btn-lau2").removeClass("btn-warning").addClass("btn-success")
    $("#btn-lau1").removeClass("btn-warning").addClass("btn-success")
 
    object.tenMonHang = "mua lau bo tai";
  
})
$("#btn-them1").on("click", function(){
    alert ("Đã chọn")
 
    object.tenMonHang = "bun/mi them";
    object.giaTien="0.000VND"
  
})
$("#btn-them2").on("click", function(){
    alert ("Đã chọn")
 
    object.tenMonHang = "rau them";
    object.giaTien="0.000VND"
  
})
$("#btn-them3").on("click", function(){
    alert ("Đã chọn")
 
    object.tenMonHang = "nam them";
    object.giaTien="10.000VND"
  
})
$("#btn-nuoc1").on("click", function(){
    alert ("Đã chọn")
 
    object.tenMonHang = "tra tac";
    object.giaTien="10.000VND"
  
})
$("#btn-nuoc2").on("click", function(){
    alert ("Đã chọn")
 
    object.tenMonHang = "Coca";
    object.giaTien="10.000VND"
  
})
$("#btn-nuoc3").on("click", function(){
    alert ("Đã chọn")
 
    object.tenMonHang = "bia";
    object.giaTien="15.000VND"
  
})
function checkInfor(paramOrder){
    if(paramOrder.tenMonHang=="")
        alert("Chon menu!");
    else if(paramOrder.tenNuocUong=="")
    alert("Chon nuoc uong!");
    else {
        alert("Da hoan thanh");
        return true;
    }
    return false;
}
//Cau 1
function tinhDiem() {
  var diemChuan = document.getElementById("diemChuan").value * 1;
  var diemMonMot = document.getElementById("diemMonMot").value * 1;
  var diemMonHai = document.getElementById("diemMonHai").value * 1;
  var diemMonBa = document.getElementById("diemMonBa").value * 1;
  var khuVuc = document.getElementById("khuVuc").value * 1;
  var doiTuong = document.getElementById("doiTuong").value * 1;
  var tongDiem = diemMonMot + diemMonHai + diemMonBa + khuVuc + doiTuong;
  if (
    tongDiem >= diemChuan &&
    diemMonMot != 0 &&
    diemMonHai != 0 &&
    diemMonBa != 0
  ) {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `<h2>Bạn đã đậu với số điểm ${tongDiem}</h2>`;
  } else if (diemMonMot == 0 || diemMonHai == 0 || diemMonBa == 0) {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `<h2>Bạn đã rớt với số điểm ${tongDiem} vì đã có điểm liệt</h2>`;
  } else {
    document.getElementById(
      "ketQua1"
    ).innerHTML = `<h2>Bạn đã rớt với số điểm ${tongDiem} thấp hơn điểm chuẩn là ${diemChuan}</h2>`;
  }
}
//Cau 2
function tinhTienDien() {
  var hoTen = document.getElementById("hoTen").value;
  var soKw = document.getElementById("soKw").value * 1;
  var soTien = null;
  if (soKw >= 0 && soKw <= 50) {
    soTien = 500 * soKw;
  } else if (soKw > 50 && soKw <= 100) {
    soTien = 500 * 50 + (soKw - 50) * 650;
  } else if (soKw > 100 && soKw <= 200) {
    soTien = 500 * 50 + 650 * 50 + (soKw - 100) * 850;
  } else if (soKw > 200 && soKw <= 350) {
    soTien = 500 * 50 + 650 * 50 + 850 * 100 + (soKw - 200) * 1100;
  } else if (soKw > 350) {
    soTien = 500 * 50 + 650 * 50 + 850 * 100 + 1100 * 150 + (soKw - 350) * 1300;
  }
  document.getElementById(
    "ketQua2"
  ).innerHTML = `<h2>Tiền điện của bạn ${hoTen} là: ${soTien}đ</h2>`;
}
//Cau 3
function tinhTienThue() {
  var hoTen = document.getElementById("hoTen").value;
  var thuNhapNam = document.getElementById("thuNhapNam").value * 1;
  var soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
  var thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000;
  var tienThue = null;

  if (thuNhapChiuThue < 0) {
    tienThue = 0;
  }
  if (thuNhapChiuThue <= 60000000 && thuNhapChiuThue >= 0) {
    tienThue = (thuNhapChiuThue * 5) / 100;
  } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
    tienThue = (thuNhapChiuThue * 10) / 100;
  } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
    tienThue = (thuNhapChiuThue * 15) / 100;
  } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
    tienThue = (thuNhapChiuThue * 20) / 100;
  } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
    tienThue = (thuNhapChiuThue * 25) / 100;
  } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
    tienThue = (thuNhapChiuThue * 30) / 100;
  } else if (thuNhapChiuThue > 960000000) {
    tienThue = (thuNhapChiuThue * 35) / 100;
  }
  //document.getElementById("ketQua3").innerHTML=`<h2>Tiền thuế của bạn ${hoTen} là: ${tienThue} VNĐ</h2>`
  document.getElementById(
    "ketQua3"
  ).innerHTML = `<h2>Tiền thuế của bạn ${hoTen} là: ${new Intl.NumberFormat(
    "vi-VN",
    { style: "currency", currency: "VND" }
  ).format(tienThue)} </h2>`;
}
//Cau 4

function soKetNoi() {
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  if (loaiKhachHang == "open") {
    document.getElementById(
      "a"
    ).innerHTML = `<input type="text" name="" id="soKetNoi" class="form-control" placeholder="Số kết nối" >`;
  } else if (loaiKhachHang == "close") {
    //  document.getElementById("a").innerHTML=``
    $("#soKetNoi").hide();
  }
}

function tinhTienCap() {
  var maKhachHang = document.getElementById("maKhachHang").value;
  var loaiKhachHang = document.getElementById("loaiKhachHang").value;
  var soKenhCaoCap = document.getElementById("soKenhCaoCap").value * 1;
  var soKetNoi = document.getElementById("soKetNoi").value * 1;
  var tienCap = null;
  if (loaiKhachHang == "close") {
    tienCap = 4.5 + 20.5 + 7.5 * soKenhCaoCap;
  } else if (loaiKhachHang == "open" && soKetNoi <= 10 && soKetNoi >= 0) {
    tienCap = 15 + 75 + 50 * soKenhCaoCap;
  } else if (loaiKhachHang == "open" && soKetNoi > 10) {
    tienCap = 15 + 75 + 5 * (soKetNoi - 10) + 50 * soKenhCaoCap;
  }
  document.getElementById(
    "ketQua4"
  ).innerHTML = `<h2>Tiền cáp của khách hàng ${maKhachHang} là: ${tienCap} $</h2>`;
}

// 1. Định nghĩa đối tượng iphone 5, iphone 6, iphone 7, iphone 8, iphone X, iphone 11, iphone 12 bao gồm các trường thông tin: hinhAnh, ten, gia
let iphone5 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip5',
    price: 5000000
}

let iphone6 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip6',
    price: 20000000
}

let iphone7 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip7',
    price: 1000000
}

let iphone8 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip8',
    price: 1002000
}

let iphoneX = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ipX',
    price: 12000000
}

let iphone11 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip11',
    price: 23000000
}

let iphone12 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip12',
    price: 12000000
}

let iphone13 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip13',
    price: 13400000
}

let iphone14 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip14',
    price: 213123213
}

let iphone1 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip5',
    price: 123434567
}
// 2. Định nghĩa một mảng và thêm vào toàn bộ các đối tượng trên vào mảng 
let arr = []

arr.push(iphone5, iphone6, iphone7, iphone8, iphoneX, iphone11, iphone12, iphone13, iphone14, iphone1)
console.log(`arr hrheh`, arr);

// 3. Sửa giá sản phẩm nằm ở vị trí thứ 3 trong mảng thành 5000000
arr[2].price = 5000000
console.log(arr[2]);

// 4. Xoá sản phẩm ở vị trí thứ (5,6) và (1,2)
// let splice56 = arr.splice(5, 6)
let splice12 = arr.splice(1, 2)

// console.log(`splice 5 6`, splice56);
console.log(`splice 1 2`, splice12);

// 5. Viết hàm truyền vào một mảng các đối tượng xuất ra thông tin sản phẩm trên giao diện (sử dụng hàm document.write) với cú pháp
// document.write(`san pham ${arr.ten} co gia la: ${arr.price}`)
const xuatThongTin = (mang) => {
    mang.map((item) => (
        document.writeln(`san pham ${item.ten} co gia la: ${item.price}`)
    ))
}
xuatThongTin(arr)

// 6. Viết hàm truyền vào một mảng các đối tượng xuất ra giao diện sản phẩm. Trên giao diện phải hiển thị được hinhAnh, ten, gia 
const xuatGiaoDien = (mang) => {
    mang.map((item) => (
        document.writeln(`
        <div class="san-pham">
            <div class="img">
                <img src=${item.image} alt="" />
            </div>
            <div class="ten">#${item.ten}</div>
            <div class="gia">${item.price}</div>
        </div>`)
    ))
}

// 7. Viết hàm tìm sản phẩm có giá > 5000000
const timSanPhamCoGiaLonHon5Tr = (mang) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].price > 5000000) {
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`san pham co gia lon hon 5tr:`, timSanPhamCoGiaLonHon5Tr(arr));

// 8. Viết hàm tìm sản phẩm có giá > gia
const timSanPhamTheoGia = (mang, gia) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].price > gia) {
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`tim san pham theo gia:`, timSanPhamTheoGia(arr, 2000));

// 9. Sử dụng hàm (8) và (6) hiển thị ra giao diện toàn bộ sản phẩm có giá > 5.000.000
xuatGiaoDien(timSanPhamTheoGia(arr, 10000000))

// 10. Viết hàm tìm ra tất cả vị trí của sản phẩm có tên "iphone 5"
const timSanPhamIphone5 = (mang) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].ten == 'ip5') {
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`tim ip 5`, timSanPhamIphone5(arr));

// 11. Viết hàm tìm ra tất cả vị trí của sản phẩm có tên được truyền và 
const timSanPhamTheoTen = (mang, ten) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].ten == ten) {
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`tim theo ten:`, timSanPhamTheoTen(arr, 'ip14'));

// 12. Viết hàm cập nhật giá của tất cả sản phẩm có tên là "iphone 5" thành {giaMoi}
const capNhatGiaIPhone5 = (mang, giaMoi) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].ten == 'ip5') {
            mang[i].price = giaMoi
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`cap nhat gia ip5:`, capNhatGiaIPhone5(arr, 20020020));

// 13. Viết hàm cập nhật giá của tất cả sản phẩm có tên là {ten} thanh {giaMoi} 
const capNhatGiaTenIPhone5 = (mang, ten, giaMoi) => {
    let temp = []
    for (let i = 0; i < mang.length; i++) {
        if (mang[i].ten == ten) {
            mang[i].price = giaMoi
            temp.push(mang[i])
        }
    }
    return temp
}
console.log(`cap nhap gia san pham theo ten:`, capNhatGiaTenIPhone5(arr, 'ip14', 50000000));

// 14. Viết hàm sắp xếp một mảng các đối tượng theo giá tăng dần 
const sapXepTangDanTheoGia = (mang) => {
    let temp = []
    temp = mang
    let tam
    for (let i = 0; i < temp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (temp[i].price < temp[j].price) {
                tam = temp[i]
                temp[i] = temp[j]
                temp[j] = tam
            }
        }
    }
    return temp
}
console.log(`sap xep tang dan theo gia:`, sapXepTangDanTheoGia(arr));

// 15. Viết hàm sắp xếp một mảng các đối tượng theo giá giảm dần 
const sapXepGiamDanTheoGia = (mang) => {
    let temp = []
    temp = mang
    let tam
    for (let i = 1; i < temp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (temp[i].price > temp[j].price) {
                tam = temp[i]
                temp[i] = temp[j]
                temp[j] = tam
            }
        }
    }
    return temp
}
console.log(`sap xep giam dan theo gia:`, sapXepGiamDanTheoGia(arr));

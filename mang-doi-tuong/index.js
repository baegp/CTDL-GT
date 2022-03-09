// 1. Định nghĩa đối tượng iphone 5, iphone 6, iphone 7, iphone 8, iphone X, iphone 11, iphone 12 bao gồm các trường thông tin: hinhAnh, ten, gia
let iphone5 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip5',
    price: 20000000
}

let iphone6 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip6',
    price: 20000000
}

let iphone7 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip7',
    price: 20000000
}

let iphone8 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip8',
    price: 20000000
}

let iphoneX = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ipX',
    price: 20000000
}

let iphone11 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip11',
    price: 20000000
}

let iphone12 = {
    image: "https://cdn.tgdd.vn/Products/Images/42/213032/iphone-12-pro-vang-dong-new-600x600-1-600x600.jpg",
    ten: 'ip12',
    price: 20000000
}

// 2. Định nghĩa một mảng và thêm vào toàn bộ các đối tượng trên vào mảng 
let arr = []

arr.push(iphone5, iphone6, iphone7, iphone8, iphoneX, iphone11, iphone12)
console.log(arr);

// 3. Sửa giá sản phẩm nằm ở vị trí thứ 3 trong mảng thành 5000000
arr[2].price = 5000000
console.log(arr[2]);

// 4. Xoá sản phẩm ở vị trí thứ (5,6) và (1,2)
let splice56 = arr.splice(5, 6)
let splice12 = arr.splice(1, 2)

console.log(`splice 5 6`, splice56);
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
const xuatGiaoDien =(mang) =>{
    
}
// tinh tong
const tinhTong = (x, y) => {
    return x + y
}
let n1 = 7
let n2 = 3
console.log(`tinh tong ${n1} + ${n2} = `, tinhTong(n1, n2));

// tinh hieu

const tinhHieu = (x, y) => {
    return x - y
}
console.log(`tinh hieu  ${n1} - ${n2} = `, tinhHieu(n1, n2));

// tinh tich 
const tinhTich = (x, y) => {
    return x * y
}
console.log(`tich cua ${n1} * ${n2} =`, tinhTich(n1, n2));

// tinh thuong
const tinhThuong = (x, y) => {
    return x / y
}
let t1 = 5
let t2 = 0
console.log(`tinh thuong neu t2 = 0: ${t1} / ${t2}`, tinhThuong(t1, t2));
let temp
temp = t1
t1 = t2
t2 = temp
console.log(`tinh thuong neu t1 = 0:  ${t1} / ${t2} = `, tinhThuong(t1, t2));

// tinh binh phuong
const binhPhuong = (n) => {
    return n * n
}
console.log(`binh phuong cua ${n1} la:`, binhPhuong(n1));
console.log(`binh phuong cua ${n2} la:`, binhPhuong(n2));

//  tim so lon so be
const max = (x, y) => {
    let max
    if (x > y) {
        max = x
    } else {
        max = y
    }
    return max
}
console.log(` ${n1} va ${n2} so lon la: `, max(n1, n2));

// tim so be
const min = (x, y) => {
    let min
    if (x < y) {
        min = x
    } else {
        min = y
    }
    return min
}
console.log(` ${n1} va ${n2} so nho la: `, min(n1, n2));

// tinh trung binh
const trungBinh = (x, y) => {
    return (x + y) / 2
}
console.log(`trung binh cua ${n1} va ${n2} la: `, trungBinh(n1, n2));

// chia du 
const chiaDu = (x, y) => {
    return x % y
}
console.log(`${n1} % ${n2} =`, chiaDu(n1, n2));
console.log(`${n2} % ${n1} =`, chiaDu(n2, n1));

// kt chia het
const chiaHet = (x, y) => {
    if (x % y == 0) {
        return true
    }
    else {
        return false
    }
}
console.log(chiaHet(n1, n2) ? `${n1} chia hết cho ${n2}` : `${n1} khong chia hết cho ${n2}`);
console.log(chiaHet(n2, n1) ? `${n2} chia hết cho ${n1}` : `${n2} khong chia hết cho ${n1}`);
// if (chiaHet(n1, n2) == true) {
//     console.log(`${n1} chia hết cho ${n2}`);
// } else {
//     console.log(`${n2} khong chia hết cho ${n1}`);
// }

// chu vi hinh chu nhat
const chuViHinhChuNhat = (x, y) => {
    return (x + y) * 2
}
console.log(`chieu dai ${n1}, chieu rong ${n2} chu vi hinh chu nhat la:`, chuViHinhChuNhat(n1, n2));

// dien tich hinh chu nhat
const dienTichHinhChuNhat = (x, y) => {
    return x * y
}
console.log(`chieu dai ${n1}, chieu rong ${n2} dien tich hinh chu nhat la:`, dienTichHinhChuNhat(n1, n2));

// tinh chu vi dien tich hinh tron 
const chuViHinhTron = (r) => {
    return r * 2 * Math.PI
}
console.log(`chu vi hinh tron co ban kinh ${n1} la:`, chuViHinhTron(n1));
console.log(`chu vi hinh tron co ban kinh ${n2} la:`, chuViHinhTron(n2));

// dien tich hinh tron
const dienTichHinhTron = (r) => {
    return r * r * Math.PI
}
console.log(`dien tich hinh tron co ban kinh ${n1} la:`, dienTichHinhTron(n1));
console.log(`dien tich hinh tron co ban kinh ${n2} la:`, dienTichHinhTron(n2));

// chuoi
let s1 = 'giang'
let s2 = 'giang dep trai'
let s3 = 'trai'
let s4 = 'qua'
let s5 = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4

const noiChuoi = (s1, s2) => {
    return s1 + ' ' + s2
}
console.log(`noi chuoi ${s1} va ${s2} :`, noiChuoi(s1, s2));

// 2. Dưa vào hàm nối 2 chuỗi ở 1. Xuất ra màn hình một chuỗi S là gộp của 5 chuỗi S1, S2, S3, S4, S5 
let sTong = s1 + ' ' + s2 + ' ' + s3 + ' ' + s4 + ' ' + s5
console.log(sTong);

//    4. Dựa vào hàm in hoa đã làm ở 3. Xuất ra màn hình in hoa của 5 chuỗi S1, S2, S3, S4, S5 và S = S1S2S3S4S5 
const inHoa = (x) => {
    return x.toLocaleUpperCase()
}
console.log(`in hoa chuoi: ${sTong} =`, inHoa(sTong));

//     5. Viết hàm kiểm tra chuỗi này có tồn tại trong chuỗi kia hay không.
const coTonTai = (x, y) => {
    if (x.includes(y)) {
        return true
    } else {
        return false
    }
}
console.log(coTonTai(s2, s1) ? `${s2} co ton tai trong ${s1}` : ` ${s2} khong ton tai trong ${s1}`);

// 7. sử dụng hàm [s.length] để xuất ra độ dài các chuỗi s1-s5 và độ sài của chuỗi S1S2S3S4S5
console.log(`do dai cua ${s1} la:`, s1.length);
console.log(`do dai cua ${s2} la:`, s2.length);
console.log(`do dai cua ${s3} la:`, s3.length);
console.log(`do dai cua ${s4} la:`, s4.length);
console.log(`do dai cua ${s5} la:`, s5.length);
console.log(`do dai cua ${sTong} la:`, sTong.length);

// 8. Sử dụng hàm có sẵn [string.substring(begin,end)] để cắt ra một chuỗi con của S1,S2,S3,S4,S5 từ vị trí số 1 tới vị trí số 3
console.log(`cat chuoi ${s1}:`, s1.substring(0, 3));
console.log(`cat chuoi ${s2}:`, s2.substring(0, 3));
console.log(`cat chuoi ${s3}:`, s3.substring(0, 3));
console.log(`cat chuoi ${s4}:`, s4.substring(0, 3));
console.log(`cat chuoi ${s5}:`, s5.substring(0, 3));

//  9. sử dụng hàm có sẵn [string.includes(s)] để xem S1, S2, S3, S4 có tồn tại trong S5 không. Nếu S1 có tồn tịa thì xuất ra màn hình câu "S1 có tồn tại trong S5" nếu không thì xuất ra câu "S1 không tồn tại trong S5". Tương tự đối với S2, S3, S4
console.log(coTonTai(s5, s1) ? `${s1} co ton tai trong ${s5}` : ` ${s1} khong ton tai trong ${s5}`);
console.log(coTonTai(s5, s2) ? `${s2} co ton tai trong ${s5}` : ` ${s2} khong ton tai trong ${s5}`);
console.log(coTonTai(s5, s3) ? `${s3} co ton tai trong ${s5}` : ` ${s3} khong ton tai trong ${s5}`);
console.log(coTonTai(s5, s4) ? `${s4} co ton tai trong ${s5}` : ` ${s4} khong ton tai trong ${s5}`);
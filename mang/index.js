// 1. Tạo một mảng chứa các số từ 1 tới 10
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2. Tạo một mảng lưu trữ sở thích cá nhân 
let like = ['em1', 'em2', 'em3', 'em4', 'bóng chuyền']

// 3. Xuất mảng (1) ra console.log
console.log(`number`, number);

// 4. Xuất mảng (2) ra console.log
console.log(`so thich`, like);

// 5. thêm giá trị "cầu lông", "bơi lội" vào mảng sở thích 
like.push('cau long', 'boi loi')
console.log(like);

// 6. Cập nhật giá trị "bóng chuyền" trong mảng thành "Bóng Chuyền"
like[4] = 'Bóng Chuyền'
console.log('cap nhat bong chuyen', like);

// 7. Xoá 2 phần tử tại vị trí số 1 và 2 ra khỏi mảng 
let xoa2 = like.splice(1, 2)
console.log(xoa2);

// 8. Viết hàm trả ra danh sách tất cả số nhỏ hơn n
const getLessThan = (n) => {
    let arr = []
    for (let i = 0; i < n; i++) {
        if (i < n) {
            arr.push(i)
        }
    }
    return arr
}

// 9. Sử dụng hàm (8) xuất ra console danh sách các số nhỏ hơn 100 
console.log(getLessThan(100));

// 10. Viết hàm trả ra danh sách tất cả các số lẻ nhỏ hơn n
const getOddlessThan = (n) => {
    let arr = []
    for (let i = 1; i < n; i += 2) {
        arr.push(i)
    }
    return arr
}

// 11. Sử dụng hàm (9) xuất ra console danh sách toàn bộ số lẻ <1000
console.log(getOddlessThan(1000));

// 12. Viết hàm trả ra danh sách in hoa tất cả các phần tử trong mảng. Đầu vào là một mang, đầu ra là mông mảng khác và tất cả các phần tử được in hoa  
const toUpperCase = (arr) => {
    let mang = []
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toUpperCase()
        mang.push(arr[i])
    }
    return mang
}

// 13. Sử dụng hàm (12) để in hoa mảng sở thích cá nhân 
console.log('viet hoa', toUpperCase(like));

// 14. Viết hàm tìm ra vị trí phần tử đầu tiên nằm trong mảng 
const findFirst = (arr, chuoiCanTim) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            return i + 1
        }
    }
}

// 15. Sử dụng hàm (14). 
console.log('tim vi tri dau tien:', findFirst(["bóng chuyền", "bóng rổ", "bóng đá"], 'bóng rổ'));

// 16. Viết hàm tìm ra vị trí phần tử cuối cùng nằm trong mảng 
const findLast = (arr, chuoiCanTim) => {
    let temp = []
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == chuoiCanTim) {
            return i + 1
        }
    }
}

// 17. Sử dụng hàm (16). 
// - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
// - string cần tìm: bóng rổ
// - kết quả trả ra: vị trí 2
console.log('vi tri cuoi cung', findLast(["bóng chuyền", "bóng rổ", "bóng đá"], 'bóng đá'));

// 18. Viết hàm tìm ra vị trí tất cả phần tử nằm trong mảng 
const find = (arr, chuoiCanTim) => {
    let temp = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanTim) {
            temp.push(i + 1)
        }
    }
    return temp
}

// 19. Sử dụng hàm (19). 
// - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]    
// - string cần tìm: bóng rổ
// - kết quả trả ra: vị trí [2,4]
console.log('tim tat ca:', find(["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"], 'bóng rổ'))

// 20. Viết hàm thêm một phần tử vào mảng 
const add = (arr, chuoiCanThem) => {
    arr.push(chuoiCanThem)
    return arr
}

// 21. Sử dụng hàm (20). 
// - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
// - string cần thêm: bóng rổ
// - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá", "bóng rổ"]
console.log('them phan tu:', add(["bóng chuyền", "bóng rổ", "bóng đá"], 'bóng rổ'));

// 22. Viết hàm thêm một phần tử vào mảng, nhưng nếu phần tử đó đã tồn tại thì ko thêm nữa.
const addIfNotExist = (arr, chuoiCanThem) => {
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanThem) {
            count++
        }
    }
    if (count == 0) {
        arr.push(chuoiCanThem)
    }
    return arr
}

// 23. Sử dụng hàm (22). 
// - Mảng: ["bóng chuyền", "bóng rổ", "bóng đá"]    
// - string cần thêm: bóng rổ
// - kết quả trả ra: ["bóng chuyền", "bóng rổ", "bóng đá"]
console.log('them phan tu neu da co thi khong them', addIfNotExist(["bóng chuyền", "bóng rổ", "bóng đá"], ' a'));

// 24. Viết hàm xoá toàn bộ phần tử ra khỏi mảng
const deleteV = (arr, chuoiCanXoa) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == chuoiCanXoa) {
            arr.splice(i,1)
        }
    }
    return arr
}
console.log('xoa all:', deleteV(["bóng chuyền", "bóng rổ", "bóng đá", "bóng chuyền"], 'bóng chuyền'));
// 1. Viết hàm xuất ra một tin nhắn, n lần
const showMessage = (message, amount) => {
    for (let i = 1; i <= amount; i++) {
        console.log(message);
    }
}
// 2. Sử dung hàm (1) xuất ra 10 lần dòng chữ "Hôm nay trời đẹp quá"
showMessage('Hôm nay trời đẹp quá', 10)

// 3. Viết hàm tính tổng từ 1 tới n 
const sum = (amount) => {
    tong = 0;
    for (let i = 1; i <= amount; i++) {
        tong += i
    }
    return tong

}
// 4. Sử dụng hàm (3) tính toán tổng từ 1 tới 100; tính toán tổng từ 1 tới 500
console.log(`tinh tong tu 1 toi 100`, sum(100));
console.log(`tinh tong tu 1 toi 500`, sum(500));

// 5. Viết hàm tính tổng từ a tới b 
const sumAb = (a, b) => {
    let tong = 0
    for (let i = a; i <= b; i++) {
        tong += i
    }
    return tong
}
// 6. Sử dụng hàm (5) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
console.log(`tinh tong tu 1 den 100`, sumAb(1, 100));
console.log(`tinh tong tu 20 den 76`, sumAb(20, 76));

// 7. Viết hàm tính tổng tất cả các số lẻ từ a tới b 
const sumOdd = (a, b) => {
    let tong = 0
    for (let i = a; i <= b; i++) {
        if (i % 2 != 0) {
            tong += i
        }
    }
    return tong
}
// 8. Sử dụng hàm (7) tính toán tổng từ 1 tới 100; tính toán tổng từ 20 tới 76
console.log(`tinh tong cac so le tu 1 den 100`, sumOdd(1, 100));
console.log(`tinh tong cac so le tu 20 den 76`, sumOdd(20, 76));

// 9. Viết hàm xuất ra n số lẻ nhỏ nhất 
const listOdd = (n) => {
    let arr = []
    let dem = 0
    for (let i = 1; arr.length < n; i++) {
        if (i % 2 != 0) {
            dem++
            arr.push(i)
            if (dem == n) {
                break
            }
        }
    }
    return arr
}
// 10. Sử dụng hàm (9) xuất ra 100 số lẻ gần nhất 
console.log(`cac so le gan nhat la:`, listOdd(100));

// 11. Viết hàm xuất ra n số lẻ gần nhất bắt đầu từ m. Ví dụ: viết ra 3 số lẻ gần nhất bắt đầu từ 102 => 103; 105; 107
const listOddAb = (from, amount) => {
    let arr = []
    for (let i = from; arr.length < amount; i++) {
        if (i % 2 != 0) {
            arr.push(i)
        }
    }
    return arr
}
// 12. Sử dụng hàm (11) xuất ra 57 số lẻ gần nhất bắt đầu từ 1005
console.log(`57 so le tu 1005 la:  `, listOddAb(1005, 57));

// 13. Viết hàm kiểm tra một số có phải là số nguyên tố hay không? Biết số nguyên tố là số chia hết cho một và chính nó.
const isPrime = (n) => {
    let dem = 0;
    for (let i = 1; i <= n; i++) {
        if (n % i == 0 && n >= 2) {
            dem++;
        }
    }
    if (dem == 2) {
        return true;
    } else {
        return false;
    }
}
console.log(isPrime(3));

// 14. Viết hàm xuất ra n số nguyên tố nhỏ nhất. 
const isPrimeMin = (n) => {
    let arr = []
    let i = 0;
    while (arr.length < n) {
        if (isPrime(i)) {
            arr.push(i)
        }
        i++;
    }
    return arr
}
// 15. Sử dụng hàm (14) xuất ra 20 số nguyên tố nhỏ nhất.
console.log(`20 so nguyen to  nn la: `, isPrimeMin(20));

// 16. Viết hàm xuất ra n số nguyên tố nhỏ nhất băts đầu từ m
const listPrime = (from, amount) => {
    let arr = []
    let i = from
    while (arr.length < amount) {
        if (isPrime(i)) {
            arr.push(i)
        }
        i++
    }
    return arr
}
console.log(`cac so nguyen to nho nhat la:`, listPrime(1000, 20));
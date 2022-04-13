const Finbonaci = (n) => {
    let b = 0
    let temp

    for (a = 1; n >= 0; n--) {
        console.log(`finbonaci`, a);
        temp = a;
        a = a + b;
        b = temp;
    }
    return b;
}
Finbonaci(11)

// 1! = 1
// 2! = 1 * !2 = 2
// 3! = 2 * !3 = 6 
// 4! = 6 * !4 = 24
// 4 * giathua(4-1 = 3)



const giaithuaN = (n) => {
    let tich = 1
    for (let i = 1; i <= n; i++) {
        console.log(i);
        tich = tich * i
    }
    return tich
}
console.log(`test`, giaithuaN(4));

// 1. Xuất ra danh sách dãy số Finbonaci. Dãy Finbonaci là dãy mà số sau bằng tổng của 2 số trước nó
const F = (n) => {
    if (n <= 1) {
        return 1
    } else {
        return F(n - 1) + F(n - 2)
    }
}

for (let i = 0; i < 10; i++) {
    console.log(F(i));
}



// 2. Tính giai thừa của n. Biết rằng n! = 1*2*3*....*n
const giaiThua = (n) => {
    if (n == 1) {
        return 1
    } else {
        console.log('n:', n);
        return n * giaiThua(n - 1)
    }
}
console.log(`giai thua`, giaiThua(4));

let arr = [4, 5, 1, 14, 2, 7, 20];


const insertSort = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        // Compare key with each element on the left of it until an element smaller than
        // it is found.
        // For descending order, change key<array[j] to key>array[j].
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            --j;
        }
        // Place key at after the element just smaller than it.
        arr[j + 1] = key;
    }
}
insertSort(arr);
console.log(arr);


// 3.Tính S(n) = 1 + 2 + 3 + ... + n - 1 + n
const tong = (n) => {
    if (n == 1) {
        return 1
    } else {
        return n + tong(n - 1)
    }
}
console.log(tong(10));

// 4.Tính S(n) = 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2
const f1 = (n) => {
    if (n == 1)

        return 1;

    return f1(n - 1) + n * n;
}
console.log(f1(10));



let listSv = [
    { "mssv": 1, "name": "Văn A" },
    { "mssv": 2, "name": "Văn B" },
    { "mssv": 4, "name": "Văn C" },
    { "mssv": 6, "name": "Văn D" },
    { "mssv": 8, "name": "Văn E" },
    { "mssv": 10, "name": "Văn F" },
    { "mssv": 12, "name": "Văn G" },
    { "mssv": 15, "name": "Văn H" },
]

const search = (n) => {
    for (let i = 0; i < listSv.length; i++) {
        if (listSv[i].mssv == n) {
            console.log(listSv[i].name);
        }
    }
}
search(8)


function bubbleSort(array) {
    var size = array.length;
    // run loops two times: one for walking throught the array
    // and the other for comparison
    for (var i = 0; i < size - 1; i++) {
        for (var j = 0; j < size - i - 1; j++) {
            // To sort in descending order, change > to < in this line.
            if (array[j] > array[j + 1]) {
                // swap if greater is at the rear position
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
}
var arr11 = [3, 5, -2, 14, -9, 30];
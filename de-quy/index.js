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

const giaiThua = (n) => {
    if (n == 1) {
        return 1
    } else {
        console.log('n:', n);
        return n * giaiThua(n - 1)
    }
}
console.log(`giai thua`, giaiThua(4));

const giaithuaN = (n) => {
    let tich = 1
    for (let i = 1; i <= n; i++) {
        console.log(i);
        tich = tich * i
    }
    return tich
}
console.log(`test`, giaithuaN(4));


// const fif = (n) => {
//     if () {

//     } else {
//         return n +  fif(n-1) + fif(n-2)
//     }
// }
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
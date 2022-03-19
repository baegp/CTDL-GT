const Finbonaci = (n) => {
    let a = 1
    let b = 0
    let temp

    for (a; n >= 0; n--) {
        console.log(`finbonaci`, a);
        temp = a;
        a = a + b;
        b = temp;
    }
    return b;

}
Finbonaci(11)
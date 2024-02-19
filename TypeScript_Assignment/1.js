function sumOf(Num) {
    var sum = 0;
    var i;
    for (i = 0; i <= Num; i++) {
        if (i % 2 == 0) {
            sum += Math.pow(i, 2);
        }
    }
    return sum;
}
console.log(sumOf(10));

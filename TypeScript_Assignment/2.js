function minmum() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var res = num[0];
    console.log(num);
    for (var i = 1; i < num.length; i++) {
        if (num[i] < res) {
            res = num[i];
        }
    }
    return res;
}
console.log(minmum(100, 12, 143, 42));

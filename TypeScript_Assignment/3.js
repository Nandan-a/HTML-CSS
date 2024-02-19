function strJoin(sep) {
    var val = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        val[_i - 1] = arguments[_i];
    }
    console.log(val);
    return val.join(sep);
}
console.log(strJoin("#", "Nandan", "Amith", "Vinay"));

"use strict";
exports.__esModule = true;
var items;
items = ["10", "12", "15", "20", "22"];
function sum(a, b) {
    return a + b;
}
for (var i = 0; i < items.length; i++) {
    console.log("O valor ".concat(items[i], " somado com 1 = ").concat(sum(items[i], 1)));
}

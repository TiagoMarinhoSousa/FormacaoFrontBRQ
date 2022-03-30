"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let items;
items = ["10", "12", "15", "20", "22"];
function sum(a, b) {
    return a + b;
}
for (let i = 0; i < items.length; i++) {
    console.log(`O valor ${items[i]} somado com 1 = ${sum(items[i], 1)}`);
}

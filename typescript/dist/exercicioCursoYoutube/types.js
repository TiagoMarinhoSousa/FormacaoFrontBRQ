"use strict";
//boolean (true / false)
let isOpen;
isOpen = true;
//string ('teste', "teste", `teste`)
let message;
// message = "5";
message = `teste ${isOpen}`;
//number (int, float, hex, binario)
let total;
total = 0xff;
//array (type[])
let items;
items = [1, 2, 3];
let values;
values = [1, 2, 3];
//tuple 
let title;
title = [2, 'texto'];
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
;
//any (qualquer coisa) NÃO É LEGAL
let coisa;
// coisa = 1;
// coisa = '1';
coisa = [2];
// void (vazio) - retorna vazio
function logger() {
    console.log('wherever');
}
//never
function error() {
    throw new Error("error");
}
//object (qualquer coisa que não seja tipo primitivo)
let cart;
cart = {
    key: "fi"
};

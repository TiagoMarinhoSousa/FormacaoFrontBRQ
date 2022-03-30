//boolean (true / false)
let isOpen: boolean;
isOpen = true;

//string ('teste', "teste", `teste`)
let message: string;
// message = "5";
message = `teste ${isOpen}`;

//number (int, float, hex, binario)
let total: number;
total = 0xff;

//array (type[])
let items: number[];
items = [1, 2, 3];

let values: Array<number>;
values = [1, 2, 3];

//tuple 
let title: [number, string];
title = [2, 'texto'];

//enum
enum Colors {
    white = '#fff',
    black = '#000'
};

//any (qualquer coisa) NÃO É LEGAL
let coisa: any;
// coisa = 1;
// coisa = '1';
coisa = [2];

// void (vazio) - retorna vazio
function logger(): void {
    console.log('wherever');
}

//null | undefined
type Bla = string | undefined;

//never
function error(): never{
    throw new Error("error");
}

//object (qualquer coisa que não seja tipo primitivo)
let cart: object;

cart = {
    key: "fi"
}
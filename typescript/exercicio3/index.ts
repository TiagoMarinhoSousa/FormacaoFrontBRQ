let items: string[];
items = ["10", "12", "15", "20", "22"];
function sum(a: any, b: any){
    return a + b;
}

for (let i = 0; i < items.length; i++) {    

    console.log(`O valor ${items[i]} somado com 1 = ${sum(items[i], 1)}`);
}

export {}



const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button1 = document.getElementById("button");

function sum(a: any, b: any){
    return a + b;
}

console.log(sum(1,1));
console.log(sum('1',1));
console.log(sum('1','1'));


"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Conta {
    constructor(agencia, numConta, saldo) {
        this.agencia = agencia;
        this.numConta = numConta;
        this.saldo = saldo;
    }
    get getAgencia() {
        return this.agencia;
    }
    set setAgencia(agencia) {
        this.agencia = agencia;
    }
    get getNumConta() {
        return this.numConta;
    }
    set setNumConta(numConta) {
        this.numConta = numConta;
    }
    get getSaldo() {
        return this.saldo;
    }
}
const conta = new Conta('1234', '987654', 500);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);
conta.setAgencia = '5678';
conta.setNumConta = '012345';
console.log('Nova Agencia: ' + conta.getAgencia);
console.log('Nova Conta: ' + conta.getNumConta);

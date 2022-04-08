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
    Depositar(valor) {
        if (valor <= 0) {
            console.log('Valor inválido!');
            return;
        }
        this.saldo += valor;
        console.log(`Depósito no valor de R$${valor} efetuado com sucesso!`);
        this.ImprimirSaldo();
    }
    Sacar(valor) {
        if (valor <= 0) {
            console.log('Valor para saque inválido!');
            return;
        }
        if (valor > this.saldo) {
            console.log(`Saque no valor de: R$${valor}. Saldo insuficiente!`);
            this.ImprimirSaldo();
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} efetuado com sucesso!`);
        this.ImprimirSaldo();
    }
    ImprimirSaldo() {
        console.log('O saldo atual é: R$' + this.saldo);
    }
}
const conta = new Conta('1234', '987654', 500);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);
conta.Depositar(300);
conta.Sacar(1000);
conta.Sacar(200);

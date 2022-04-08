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
    depositar(valor) {
        if (valor <= 0) {
            console.log('Valor inválido!');
        }
        this.saldo += valor;
        console.log(`Depósito no valor de R$${valor} efetuado com sucesso! Saldo atual R$${this.saldo}`);
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log('Valor para saque inválido!');
            return;
        }
        if (valor > this.saldo) {
            console.log(`Saldo insuficiente! Seu saldo atual é: R$${this.saldo}`);
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} efetuado com sucesso!`);
    }
}
const conta = new Conta('1234', '987654', 500);
console.log('Agencia: ' + conta.getAgencia);
console.log('Conta: ' + conta.getNumConta);
console.log('Saldo: ' + conta.getSaldo);
conta.depositar(300);
conta.sacar(1000);
conta.sacar(200);

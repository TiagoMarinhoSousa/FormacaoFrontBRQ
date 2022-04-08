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
            return;
        }
        this.saldo += valor;
        console.log(`Depósito no valor de R$${valor} efetuado com sucesso!`);
        this.imprimirSaldo();
    }
    sacar(valor) {
        if (valor <= 0) {
            console.log('Valor para saque inválido!');
            return;
        }
        if (valor > this.saldo) {
            console.log(`Saque no valor de: R$${valor}. Saldo insuficiente!`);
            this.imprimirSaldo();
            return;
        }
        this.saldo -= valor;
        console.log(`Saque de R$${valor} efetuado com sucesso!`);
        this.imprimirSaldo();
    }
    imprimirSaldo() {
        console.log('O saldo atual é: R$' + this.saldo);
    }
}
class ContaPF extends Conta {
    constructor(agencia, numConta, saldo, cpf) {
        super(agencia, numConta, saldo);
        this.cpf = cpf;
    }
    set setCpf(cpf) {
        this.cpf = cpf;
    }
    get getCpf() {
        return this.cpf;
    }
    imprimirSaldo() {
        console.log('O saldo atual pessoa física é: R$' + this.getSaldo);
    }
}
const contaPF = new ContaPF('1235', '565456-8', 120, '525.351.212-12');
contaPF.depositar(100);
contaPF.sacar(280);
contaPF.sacar(50);

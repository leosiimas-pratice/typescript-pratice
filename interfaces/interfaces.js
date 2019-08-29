"use strict";
function saudarComOla(pessoa) {
    console.log('Olá ' + pessoa.nome);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Joana';
}
const pessoa = {
    nome: 'João',
    idade: 27,
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
};
saudarComOla(pessoa);
mudarNome(pessoa);
saudarComOla(pessoa);
//saudarComOla({nome: 'Jonas', idade: 27, altura: 1.75})
pessoa.saudar('Skywalker');
// Usando nas Classes....
class Cliente {
    constructor() {
        this.nome = '';
    }
    saudar(sobrenome) {
        console.log('Olá, meu nome é ' + this.nome + ' ' + sobrenome);
    }
}
const meuCliente = new Cliente();
meuCliente.nome = 'Han';
saudarComOla(meuCliente);
meuCliente.saudar('Solo');
let potencia;
potencia = function (base, exp) {
    return exp == 0 ? 1 : Array(exp).fill(base).reduce((t, a) => t * a);
};
console.log(potencia(3, 0));
class RealA {
    a() { }
}
class RealAB {
    a() { }
    b() { }
}
class RealABC {
    a() { }
    b() { }
    c() { }
}
function testa(b) {
}
testa(new RealABC);
class AbstrataABD {
    a() { }
    b() { }
}
Object.prototype.log = function () {
    console.log(this.toString());
};
const x = 2;
const y = 3;
const z = 4;
console.log(x);
console.log(y);
console.log(z);
x.log();
y.log();
z.log();
const cli = {
    nome: 'Pedro',
    toString() { return this.nome; }
};
cli.log();
//# sourceMappingURL=interfaces.js.map
"use strict";
// string 
let nome = 'João';
console.log(nome);
// Não podemos mudar o tipo, eles sao inseridos sozinhos
//nome = 28
// numbers
let idade = 27;
console.log(idade);
//ponto flutuante nao tem problema
idade = 27.5;
console.log(idade);
//boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 27;
console.log(typeof minhaIdade);
minhaIdade = '27';
console.log(typeof minhaIdade);
// array
let hobbies = ["Cozinhar", "Praticar Esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
console.log(hobbies);
// tuplas
let endereco = ["Av Princiapal", 99, ""];
console.log(endereco);
endereco = ["Rua Import", 77, "Bloco a"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 1] = "Verde";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
let minhaCor = Cor.Verde;
console.log(minhaCor);
// any
let carro = 'BMW';
console.log(carro);
carro = { marca: 'BMW', ano: 2019 };
console.log(carro);
//função
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function digaOi() {
    console.log('Oi');
}
digaOi();
function multiplicar(numA, numB) {
    return numA * numB;
}
console.log(multiplicar(2, 4));
const teste = function (a, b) {
    return false;
};
// tipo função
let calculo;
/*
calculo = digaOi
calculo()
 */
calculo = multiplicar;
console.log(calculo(2, 5));
//objetos
let usuario = {
    nome: 'João',
    idade: 27
};
console.log(usuario);
// usuario = {}
/* usuario = {
    name:  'Maria',
    age: 31
}
 */
usuario = {
    nome: 'Maria',
    idade: 27
};
let funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto(8));
console.log(funcionario.baterPonto(9));
console.log(funcionario.baterPonto(5));
let funcionario2 = {
    supervisores: ['Bia', 'Carlo'],
    baterPonto(horario) {
        if (horario <= 8) {
            return 'Ponto Normal';
        }
        else {
            return 'Fora do horário';
        }
    }
};
//Union Types
let nota = 10;
console.log(`Minha nota é ${nota}!`);
nota = '9';
console.log(`Minha nota é ${nota}!`);
// Checando tipos
let valor = 30;
if (typeof valor == "number") {
    console.log("é number");
}
else {
    console.log(typeof valor);
}
// never
function falha(msg) {
    throw new Error(msg);
}
const produto = {
    nome: 'Sabão',
    preco: 44,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome');
        }
        if (this.preco <= 0) {
            falha('Preco Invalido');
        }
    }
};
produto.validarProduto();
let altura = 12;
//altura = null
let alturaOpcional = 12;
alturaOpcional = null;
const contato1 = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
};
console.log(contato1.nome);
console.log(contato1.tel1);
console.log(contato1.tel2);
let poderSerNulo = null;
poderSerNulo = 123;
poderSerNulo = 'Abc';
let contaBancaria = {
    saldo: 3456,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
};
correntista.contaBancaria.depositar(3000);
console.log(correntista);
//# sourceMappingURL=tipos.js.map
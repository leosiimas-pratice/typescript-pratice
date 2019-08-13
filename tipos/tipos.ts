// string 
let nome: string = 'João'
console.log(nome)

// Não podemos mudar o tipo, eles sao inseridos sozinhos
//nome = 28

// numbers
let idade: number = 27

console.log(idade)
//ponto flutuante nao tem problema
idade = 27.5
console.log(idade)

//boolean
let possuiHobbies: boolean = false
console.log(possuiHobbies)

// tipos explicitos
let minhaIdade: any
minhaIdade = 27
console.log(typeof minhaIdade)
minhaIdade = '27'
console.log(typeof minhaIdade)

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100]
console.log(hobbies)


// tuplas
let endereco: [string, number, string] = ["Av Princiapal", 99, ""]
console.log(endereco)

endereco = ["Rua Import", 77, "Bloco a"]
console.log(endereco)


// enums
enum Cor {
    Cinza,
    Verde,
    Azul
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)


// any
let carro: any = 'BMW'
console.log(carro)

carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

//função
function retornaMeuNome(): string {
    return nome
}
console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
}
digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}
console.log(multiplicar(2, 4))


const teste = function (a: number, b: number): boolean {
    return false
}

// tipo função

let calculo: (numeroA: number, numeroB: number) => number
/* 
calculo = digaOi
calculo()
 */
calculo = multiplicar
console.log(calculo(2, 5))

//objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27
}

console.log(usuario)
// usuario = {}

/* usuario = {
    name:  'Maria',
    age: 31
}
 */

usuario = {
    nome: 'Maria',
    idade: 27
}

/*
    Desafio:
        - Array de strings com os nomes dos sipervisores
        -Função de bater ponto que recebe a hora(número)
            e retorna uma string
                -> Ponto normal(<=8)
                -> Fora do horário(>8)

*/
// alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horario: number) => string 
}

let funcionario: Funcionario  = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto Normal'
        } else {
            return 'Fora do horário'
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto(8))
console.log(funcionario.baterPonto(9))
console.log(funcionario.baterPonto(5))


let funcionario2: Funcionario  = {
    supervisores: ['Bia', 'Carlo'],
    baterPonto(horario: number): string {
        if(horario <= 8){
            return 'Ponto Normal'
        } else {
            return 'Fora do horário'
        }
    }
}



//Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '9'
console.log(`Minha nota é ${nota}!`)


// Checando tipos
let valor = 30


if(typeof valor == "number"){
    console.log("é number")
}else{
    console.log(typeof valor)
}


// never
function falha(msg: string): never{
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 44,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0){
            falha('Precisa ter um nome')
        }
        if(this.preco <= 0){
            falha('Preco Invalido')
        }
    }
}

produto.validarProduto()

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}
const contato1: Contato = {
    nome: 'Fulano',
    tel1: '98765432',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)


let poderSerNulo = null
poderSerNulo = 123
poderSerNulo = 'Abc'


// Desafio 2

type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria : ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}

type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}
 
let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)

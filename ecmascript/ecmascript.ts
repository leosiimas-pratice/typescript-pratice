// let & const
let seraQuePode = '?'
console.log(seraQuePode)


let estaFrio = true
if(estaFrio){
    let acao = 'Colocar Casaco'
    console.log(acao)
}

const cpf: string = '123.456.000-99'
//cpf = '789.101.132-89'
console.log(cpf)

var segredo = 'externo'
function revelar() {
    var segredo = 'interno'
    console.log(segredo)
}

revelar()
console.log(segredo)

for(let i=0; i<10; i++){
    console.log(i)
}

//console.log(i)


//Arrow Function
const somar = function(n1: number, n2: number): number{
    return n1 + n2
}

console.log(somar(2,6))

const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2,3))

const saudacao = () => console.log("Ola!")
saudacao()

const falarCom = (pessoa: string) => console.log('Ola ' + pessoa)
falarCom('João')

//this
/* function normalComThis(){
    console.log(this)
} */

/* const normalComThisEspecial =  normalComThis
    .bind({nome: 'AnA'})
 */
//normalComThisEspecial()

// this??
console.log(this)
//const arrowComThis = () => console.log(this)
//arrowComThis()

function contagemRegressiva(inicio: number = 3): void {
    console.log(inicio)
    while(inicio > 0){
        inicio --
        console.log(inicio)
    }
    console.log("Fim!")
}

contagemRegressiva()
contagemRegressiva(5)


// Rest & Spread
const numbers = [1, 10, 99, -5, 10000]
console.log(Math.max(...numbers))

const turmaA: string[] =  ['João', 'Maria']
const turmaB: string[] =  ['Leonardo', 'José', ...turmaA]

console.log(turmaB)

function retornarArray(...args: number[]): number[]{
    return args
}

const numeros = retornarArray(1,2,3,4,5)
console.log(numeros)

//rest &  spread(Tupla)
const tupla: [number, string, boolean] = [1, 'av', true]
function tuplaParam1(a: number, b: string, c: boolean): void {
    console.log(`1) ${a} ${b} ${c}`)
}

tuplaParam1(...tupla)

function tuplaParam2(...params: [number, string, boolean]) {
    console.log(Array.isArray(params))
    console.log(`2) ${params[0]} ${params[1]} ${params[2]}`)
}

tuplaParam2(...tupla)


// destructuring(array)

const caracteristicas = ['Motor Zetec 1.8', 2010]
/* const motor = caracteristicas[0]
const ano = caracteristicas[1] */

const [motor, ano] = caracteristicas
console.log(motor)
console.log(ano)

// Destructuring(object)
const item = {
    nome: 'SSD 480GB',
    preco: 200
}
/* 
const nomeItem =  item.nome
const preco = item.preco */

const { nome: n, preco} = item
console.log(n)
console.log(preco)



// Exercicio 1
const dobro = (valor:number): number => valor * 2

console.log(dobro(10))
 
// Exercicio 2
const dizerOla = function (nome: string = 'Pessoa') {
    console.log("Ola, " + nome)
}
 
dizerOla()
dizerOla("Anna")
 
// Exercicio 3
const nums = [-3, 33, 38, 5]
console.log(Math.min(...nums))
 
// Exercicio 4
const array = [55, 20]
array.push(...nums)
console.log(array)
 
// Exercicio 5
const notas = [8.5, 6.3, 9.4]
const [nota1, nota2, nota3] = notas
console.log(nota1, nota2, nota3)
 
// Exercicio 6
const cientista = {primeiroNome: "Will", experiencia: 12}
const {primeiroNome, experiencia} = cientista
console.log(primeiroNome, experiencia)


// Callback

function esperar3s(callback){
    setTimeout(() => {
        callback('3s depois')        
    }, 3000)
}

esperar3s()
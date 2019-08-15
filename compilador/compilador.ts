let canal: string = 'Gaveta'
let inscritos: number = 52123

//canal = inscritos

console.log(`Canal = ${canal}`)


/* 
let nome = 'Pedro'
console.log(`Nome = ${nome}`) */

function soma(a: any, b: any) {
    return a + b    
}

let qualquerCoisa
qualquerCoisa = 12
qualquerCoisa = 'ABC'

function saudar(isManha: boolean, horas: number): string{
    let saudacao: string
    if(isManha){
        saudacao = 'Bom Dia'
    }else{
        saudacao = 'Tenha uma boa Vida!'
    }

    return saudacao
}

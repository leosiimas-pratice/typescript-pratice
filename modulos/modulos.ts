//import {areaCircunferencia, PI} from './circunferencia'
import {areaCircunferencia as circ, PI} from './circunferencia'
import areaRetangulo from './retangulo'

console.log('Módulo Carregado.......')
console.log(PI)
console.log(circ(20))
console.log(areaRetangulo(20, 10))

const { digaOi } = require('./novo')
console.log(digaOi('Ana'))
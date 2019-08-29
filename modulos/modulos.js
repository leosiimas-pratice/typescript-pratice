"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import {areaCircunferencia, PI} from './circunferencia'
const circunferencia_1 = require("./circunferencia");
const retangulo_1 = __importDefault(require("./retangulo"));
console.log('Módulo Carregado.......');
console.log(circunferencia_1.PI);
console.log(circunferencia_1.areaCircunferencia(20));
console.log(retangulo_1.default(20, 10));
const { digaOi } = require('./novo');
console.log(digaOi('Ana'));
//# sourceMappingURL=modulos.js.map
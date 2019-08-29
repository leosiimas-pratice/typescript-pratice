/* namespace Geometria{
    export namespace Areas{
    
        const PI = 3.14
        
        export function areaCircunferencia(raio: number): number{
            return PI * raio * raio
        }
        
        export function areaRetangulo(base: number, altura: number): number{
            return base * altura
        }
    }
} */

///<reference path="geometriaCirc.ts"/>
///<reference path="geometriaRect.ts"/>

console.log(Geometria.Areas.circunferencia(10))
console.log(Geometria.Areas.retangulo(10, 20))
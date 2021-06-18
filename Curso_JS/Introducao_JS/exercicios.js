// Exercicio 01
var lista_numeros = [];
var numero1 = gets();
var numero2 = gets();
var numero3 = gets ();
var numero4 = gets();
var numero5 = gets();
var numero6 = gets();
lista_numeros.push(numero1, numero2, numero3, numero4, numero5, numero6);

var qtd = 0;
for (var i = 0; i < lista_numeros.length; i++) {
    if (lista_numeros[i] > 0) qtd++;
}
console.log(qtd + ' valores positivos');


// Exercicio 02


var num = gets();
function passandoPelosPares() {
        for (var i = 1; i <= num; i++) {
            if ((i % 2) === 0) {
                            console.log(i);
            }
        }
}

passandoPelosPares();

// Exercicio 03

let numero = Array(5);

for(let i =0 ; i < numero.length; i++){
    numero[i] = parseInt(gets());
}

let positivos = numero.filter(value => value > 0);
let negativos = numero.filter(value => value < 0);
let pares = numero.filter(value => value % 2 == 0);
let impares = numero.filter(value => value % 2 != 0);

console.log(pares.length + " valor(es) par(es)");
console.log(impares.length + " valor(es) impar(es)");
console.log(positivos.length + " valor(es) positivo(s)");
console.log(negativos.length + " valor(es) negativo(s)");

// Exercicio 04

let notas = [100, 50, 20, 10, 5, 2, 1];
let nnotas = [0, 0, 0, 0, 0, 0, 0];
let quantia = parseInt(gets());
let resto = quantia;

while (resto >= 1){
  let nota = notas.findIndex(value => value <= resto);
  nnotas[nota] = Math.trunc(resto / notas[nota]);
  resto = resto % notas[nota];
}

console.log(quantia);
console.log(nnotas[0] + " nota(s) de R$ 100,00");
console.log(nnotas[1] + " nota(s) de R$ 50,00");
console.log(nnotas[2] + " nota(s) de R$ 20,00");
console.log(nnotas[3] + " nota(s) de R$ 10,00");
console.log(nnotas[4] + " nota(s) de R$ 5,00");
console.log(nnotas[5] + " nota(s) de R$ 2,00");
console.log(nnotas[6] + " nota(s) de R$ 1,00");


// Exercicio 05

let X = parseInt(gets());
let Y = parseFloat(gets());
let consumoMedio = parseFloat(X / Y).toFixed(3);

console.log(consumoMedio + " km/l");
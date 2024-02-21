//exercício 1 

console.log('Boas Vindas');

//exercício 2 

let nome = 'Ana';
console.log(`Olá, ${nome}`);

//exercício 3

let Seunome = 'Ana';
alert(`Olá, ${Seunome}`);

//exercício 4

let linguagem = prompt('Qual a sua linguagem de programação favorita');
console.log(linguagem);

//exercicíco 5

let valor1 = 4;
let valor2 = 8;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//exercício 6

let Valor1 = 6;
let Valor2 = 1;
let Resultado = Valor1 - Valor2;
console.log(`A diferença de ${Valor1} e ${Valor2} é igual a ${Resultado}`);

//exercício 7

let idade = prompt('Digite sua idade: ');
if(idade > 17){
    console.log('Você é maior de idade ')
}else{
    console.log('Você é menor de idade')
}

//exercício 8

var numero = parseFloat(prompt('Digite um número: '));
if(numero > 0 ){
    console.log('O número é positivo');
}else if(numero < 0){
    console.log('O número é negativo');
}else{
    console.log('O número é zero');
}

//exercício 9

let numero = 1;

while(numero >= 10){
    console.log(numero);
    numero++;
}

//exercício 10

let nota = 10;
if(nota >= 7){
    console.log('Aprovado');
}else{
    console.log('Reprovado');

}

//exercício 11

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

//exercício 12

let numeroInteiro = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiro);

//exercício 13


let numeroInteiro = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiro);
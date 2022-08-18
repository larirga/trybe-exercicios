// Exercícios
// 1 - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Faça programas para:

const a = 5;
const b = 10;
console.log(a +b) //Adição
console.log(a - b) //Subtração
console.log(a * b) //Multiplicação
console.log(a / b) //Divisão
console.log(a % b) //Módulo 

// 2 - Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const num1 = 4;
const num2 = 12;
if (num1 > num2) {
    console.log("Num1 é maior que Num2");
} else {
    console.log("Nun2 é maior que Nun1");
}
// 3 - Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const num1 = 10;
const num2 = 20;
const num3 = 15;
if(num1 > num2 && num1 > num3) {
    console.log('num1 é maior');
} else if(num2 > num1 && num2 > num3) {
    console.log('num2 é maior');
} else {
    console.log('num3 é maior');
}
// 4 - Faça um programa que, dado um valor recebido como parâmetro, retorne "positive" se esse valor for positivo, "negative" se for negativo, e caso não seja nem positivo e nem negativo retorne "zero".
const precisoDePraia = 'positivo'
switch(precisoDePraia) {
    case "positivo":
        console.log('positive');
        break;
    case "negativo":
        console.log('negative');
        break;
    default:
        console.log('zero');
}

//5 - Faça um programa que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let angulo1 = 60;
let angulo2 = 180;
let angulo3 = 20;
let somaAngulos = angulo1 + angulo2 + angulo3;
if(somaAngulos === 180) {
    console.log(true);
} else {
    console.log(false);
}



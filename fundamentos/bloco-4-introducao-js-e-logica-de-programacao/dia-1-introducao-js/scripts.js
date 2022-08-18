//1 
const myName = "Larissa";
const birthCity = "Belo Horizonte";
let birthYear = 1996;
birthYear = 2030;
console.log(birthYear);
console.log(myName);
console.log(birthCity);

//2
const base = 5;
let height = 8;
const area = base * height;
const perimeter = (base * 2) + (height * 2);
console.log(area);
console.log(perimeter);

//3
let notaPessoa = 82;
if (notaPessoa >= 80) {
    console.log("Parabéns, você foi aprovado");
} else if (notaPessoa < 80 && notaPessoa >= 60) {
    console.log("Você está na nossa lista de espera");
} else if (notaPessoa < 60) {
    console.log("Você foi reprovado");
}

//4
const currentHour = 12;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?"
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!!"
} else if (currentHour >= 4 && currentHour < 11) {
    message = "Hmmm, cheiro de café recém passado"
}

console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

//5
let weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na trybe >:D");
} else {
    console.log("FINALMENTE, descanso merecido UwU");
}

//6
let pessoaCandidata = 'aprovada'
switch (pessoaCandidata) {
    case "aprovada":
        console.log("Parabéns, você foi aprovado");
        break;
    case "lista":
        console.log("Você está na nossa lista de espera");
        break;
    case  "reprovada":
        console.log("Você foi reprovado");
}
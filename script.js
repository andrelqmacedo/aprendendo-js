//Questão 01
let valorInteiro = prompt("Digite um número inteiro: ");

function retornaValorInteiroMenosUm() {
    console.log(valorInteiro-1);
};

retornaValorInteiroMenosUm();

//Questão 02
let salarioMensal = prompt("Digite seu salário: ");
let percentualAjuste = prompt("Digite o percentual de ajuste do salário: ")

function ajustaSalario() {
    let salarioAjustado = parseFloat(salarioMensal)+parseFloat(salarioMensal*(percentualAjuste/100));
    return console.log(`Seu salário com ajuste é de R$ ${salarioAjustado}`);
};

console.log(ajustaSalario());

//Questão 03
let anoAtual = prompt("Digite o ano atual: ");
let anoNascimento = prompt("Digite seu ano de nascimento: ");

function checaIdade() {
    if ((anoAtual - anoNascimento) >= 16) {
        console.log("Você pode votar esse ano!");
    } else {
        console.log("Você ainda não pode votar.")
    }
}

checaIdade();

//Questão 04
let a = prompt("Digite um valor: ");
let b = prompt("Digite outro valor: ");
let c = prompt("Digite um terceiro valor: ")

function somaMaioresValores() {
    if (a > b && b > c) {
        console.log(parseFloat(a)+parseFloat(b));
    } else if (a>b && c>b) {
        console.log(parseFloat(a)+parseFloat(c));
    } else{
        console.log(parseFloat(b)+parseFloat(c));
    }
};

somaMaioresValores();

//Questão 05
let a1 = prompt("Digite um valor: ");
let b1 = prompt("Digite outro valor: ");
let c1 = prompt("Digite um terceiro valor: ")

function formaTriangulo() {
    if(a1+b1<c1 && a1+c1<b1 && b1+c1<a1) {
        console.log("Esses valores formam um triângulo.");
    } else {
        console.log("Esses valores não formam um triângulo.");
    }
};

formaTriangulo();

//Questão 06
let numMaca = prompt("Quantas maças você deseja comprar? ");

if (numMaca >= 12){
    console.log(`As ${numMaca} custam R$ ${numMaca*1.0}.`);
} else {
    console.log(`As ${numMaca} custam R$ ${numMaca*1.3}.`);
};

//Questão 07
let nomeTimeA = prompt("Digite o nome do primeiro time: ");
let nomeTimeB = prompt("Digite o nome do segundo time: ");

let golsA = prompt(`Digite quantos gols o ${nomeTimeA} marcou: `);
let golsB = prompt(`Digite quantos gols o ${nomeTimeB} marcou: `);

if (golsA > golsB) {
    console.log(`O ${nomeTimeA} venceu!!`);
} else if (golsB > golsA) {
    console.log(`O ${nomeTimeB} venceu!!`);
} else {
    console.log(`Foi empate!!!`);
}

//Questão 08
let nota1 = prompt("Digite sua primeira nota: ");
let nota2 = prompt("Digite sua segunda nota: ");
let nota3 = prompt("Digite sua terceira nota: ")

let media = (parseFloat(nota1)+parseFloat(nota2)+parseFloat(nota3))/3;

if (media >= 9) {
    console.log(`Parabéns, sua média foi de ${media} e seu conceito foi A!`);
} else if (media >= 7.5 && media < 9) {
    console.log(`Parabéns, sua média foi de ${media} e seu conceito foi B!`);
} else if (media >= 6.0 && media <7.5) {
    console.log(`Vamos estudar, sua média foi de ${media} e seu conceito foi C!`);
} else {
    console.log(`A recuperação te aguarda. Sua média foi ${media} e seu conceito foi D`);
}

//Questão 09
let tipoCombustivel = prompt("Digite o tipo de combustível: ");
let quantLitros = prompt("Digite quantos litros foram vendidos: ");

if( tipoCombustivel == "alcool"){
    let valAlcool = (parseFloat(quantLitros)*0.9);
    if (quantLitros <= 20) {
        let valAlcoolDesconto = parseFloat(valAlcool) - (parseFloat(valAlcool)*0.3);
        console.log(`Os ${quantLitros} litros custaram R$ ${valAlcoolDesconto} reais `);
    } else {
        let valAlcoolDesconto = parseFloat(valAlcool) - (parseFloat(valAlcool)*0.5);
        console.log(`Os ${quantLitros} litros custaram R$ ${valAlcoolDesconto} reais `);
    }
} else if (tipoCombustivel == "gasolina") {
    let valGasolina = (parseFloat(quantLitros)*1.2);
    if (quantLitros <= 20) {
        let valGasolinaDesconto = parseFloat(valGasolina) - (parseFloat(valGasolina)*0.4);
        console.log(`Os ${quantLitros} litros custaram R$ ${valGasolinaDesconto} reais `);
    } else {
        let valGasolinaDesconto = parseFloat(valGasolina) - (parseFloat(valGasolina)*0.6);
        console.log(`Os ${quantLitros} litros custaram R$ ${valGasolinaDesconto} reais `);
    }
};

//Questão 10

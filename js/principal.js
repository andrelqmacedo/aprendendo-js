console.log("Olá mundo");
var titulo = (document.querySelector(".titulo"));
titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente"); //busca a tr que guarda os dados do primeiro paciente(Paulo)

var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent; //utilizando a td de Paulo, buscamos o conteudo dentro da tag td que guarda as infos de peso, através da utilização do seletor de classe .info-peso

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;//o mesmo no caso acima, alterando apenas a classe, pois o conteudo buscado é diferente (queremos a altura)

var tdImc = paciente.querySelector(".info-imc");

var pesoEhValido = true;
var alturaEhValido = true;

if(peso<=0 || peso>=1000){
    console.log("Peso inválido");
    pesoEhValido = false;
    tdImc.textContent = "Peso inválido"
}

if(altura<=0 || altura>=3.00){
    console.log("Altura inválida");
    alturaEhValido = false;
    tdImc.textContent = "Altura inválido"
}

if(pesoEhValido && alturaEhValido){
    var imc = peso/(altura*altura);
    tdImc.textContent = imc;
}else{
    tdImc.textContent = "Peso e/ou Altura inválidos"
}
    
    







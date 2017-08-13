// boolean
var estaPago = true;
// number
var idade = 20;
var valor = 20.99;
// string
var empresa = 'Teste';
// template string
var nome = 'João Arthur';
console.log("Ol\u00E1 meu nome \u00E9 " + nome + " e tenho " + idade + " de idade");
// arrays
var notas = [2, 4, 8, 10];
// tuple
var alunos = ['João Arthur', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);
// enum
var Cor;
(function (Cor) {
    Cor[Cor["Verde"] = 0] = "Verde";
    Cor[Cor["Amarelo"] = 1] = "Amarelo";
    Cor[Cor["Azul"] = 2] = "Azul";
})(Cor || (Cor = {}));
;
var corFundo = Cor.Verde;
// void -> sem retorno
function alerta(mensagem) {
    // código aqui
}

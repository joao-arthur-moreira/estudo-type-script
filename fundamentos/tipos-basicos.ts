// boolean
let estaPago: boolean = true;

// number
let idade: number = 20;
let valor: number = 20.99;

// string
let empresa: string = 'Teste';

// template string
let nome: string = 'João Arthur';
console.log(`Olá meu nome é ${nome} e tenho ${idade} de idade`);

// arrays
let notas: number[] = [2, 4, 8, 10];

// tuple
let alunos: [string, number, string] = ['João Arthur', 10, 'Matemática'];
console.log(alunos[0]);
console.log(alunos[1]);
console.log(alunos[2]);

// enum
enum Cor {Verde, Amarelo, Azul};
let corFundo: Cor = Cor.Verde;

// void -> sem retorno
function alerta(mensagem: string): void {
    // código aqui
}
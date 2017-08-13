interface Pessoa {
    idade: number;
    sexo?: string; // o uso do ? torna o atributo não obrigatório
}

function imprimirIdade(pessoa: Pessoa): void {
    console.log(pessoa.idade);
}

let joaoMarcos = {idade: 30, nome: 'João'};
imprimirIdade(joaoMarcos);
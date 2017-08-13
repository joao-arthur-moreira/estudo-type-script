class Cliente {
    private nome: string;
    private idade: number;

    constructor (nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar(): string {
        return `Olá meu nome é ${this.nome} e tenho ${this.idade} de idade`;
    }
}

let joao: Cliente = new Cliente('João', 20);
console.log(joao.apresentar());
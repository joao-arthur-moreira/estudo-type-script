class Funcionario {
    private nome: string;
    private salario: number;

    constructor (nome: string, salario: number){
        this.nome = nome;
        this.salario = salario;
    }

    pagarImpost(taxa: number = 7.5): void {
        console.log(`Pagando ${this.salario * taxa / 100} de imposto`);
    }
}

class Secretario extends Funcionario {

}

class Executivo extends Funcionario {

    pagarImpost(taxa: number = 27.5): void {
        console.log('Executivo paga mais!');
        super.pagarImpost(taxa);
    }
}

let secretario: Secretario = new Secretario('João Arthur', 2000);
secretario.pagarImpost();

let executivo: Executivo = new Executivo('João', 30000);
executivo.pagarImpost();
var Cliente = (function () {
    function Cliente(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1 meu nome \u00E9 " + this.nome + " e tenho " + this.idade + " de idade";
    };
    return Cliente;
}());
var joao = new Cliente('João', 20);
console.log(joao.apresentar());

// É uma função dentro de um objeto
// No final é uma funcionalidade de um objeto
// this é usado para se referir a uma propriedade ou metodo dentro de um objeto


const pessoa = {
    nome: "Railane",
    idade: 65,
    profissao: "Analista de Qualidade",
    altura: 1.50,
    apresentar: function () {
        let faixaEtaria = this.obterFaixaEtaria();
        console.log(`Olá! Meu nome é ${this.nome}, sou uma pessoa ${faixaEtaria} de ${this.idade} anos, ${this.altura.toFixed(2)}m de altura e sou estudante.`)
    
    },
    obterFaixaEtaria: function () {
        if (this.idade < 25) {
            return "Joven";
    
        } else if (this.idade < 65) {
            return "Adulta";
    
        } else {
            return "Idosa";
        }
    }
}

pessoa.apresentar();
const pessoa = {
    nome: "Railane",
    idade: 65,
    profissao: "Analista de Qualidade",
    altura: 1.50
}

function obterFaixaEtaria (idade) {
    if (idade < 25) {
        return "Joven";

    } else if (idade < 65) {
        return "Adulta";

    } else {
        return "Idosa";
    }
}

function apresentar(pessoa) {
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou uma pessoa ${obterFaixaEtaria(pessoa.idade)} de ${pessoa.idade} anos, ${pessoa.altura.toFixed(2)}m de altura e sou estudante.`)

}

apresentar(pessoa);
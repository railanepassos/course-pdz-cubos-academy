const pessoa = {
    nome: "Railane",
    idade: 26,
    profissao: "Analista de Qualidade",
    altura: 1.50
}

function apresentarPessoa(pessoa) {

    console.log(`Olá! Meu nome é ${pessoa.nome}, sou uma Jovem de ${pessoa.idade} anos, ${pessoa.altura.toFixed(2)}m de altura e sou estudante.`)
}

apresentarPessoa(pessoa);
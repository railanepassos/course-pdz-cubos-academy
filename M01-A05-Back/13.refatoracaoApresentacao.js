let railane = {
    nome: "Railane",
    idade: 26,
    profissao: "Analista de Qualidade",
    altura: 1.63
}

let saria = {
    nome: "Saria",
    idade: 22,
    profissao: "Desenvolvedora Back-end",
    altura: 1.70
}

function apresentarPessoa (nome, idade, profissao, altura) {
    console.log(`Olá ${nome}, você tem ${idade} anos, ${altura.toFixed(2)}m de altura, sua profissão é ${profissao}.`)

}

apresentarPessoa(saria.nome, saria.idade, saria.profissao, saria.altura);
apresentarPessoa(railane.nome, railane.idade, railane.profissao, railane.altura);
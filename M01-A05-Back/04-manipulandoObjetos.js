const pessoa = {
    nome: "Railane",
    genero: "F",
    idade: 26,
    altura: 1.53,
    temCNH: false,
    apelidos: ["Rai", "Lane", "Passos"]
};

pessoa.nome = "Davi";
pessoa.apelidos[0] = "David";
pessoa.apelidos[1] = "Daw";
pessoa.apelidos[2] = "Davila";
console.log(pessoa);
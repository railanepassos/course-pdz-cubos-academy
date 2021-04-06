const pessoa = {
    nome: "Railane",
    genero: "F",
    idade: 26,
    altura: 1.53,
    temCNH: false,
    apelidos: ["Rai", "Lane", "Passos"]
};

let genero = pessoa.genero === 'F' ? 'Bem-vinda' : 'Bem-vindo';
let propriedade = "nome";
console.log(`${genero}, ${pessoa[propriedade]}. Você tem ${pessoa.idade} anos !`);
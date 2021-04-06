// Acessando objetos através da notação de ponto

const pessoa = {
    nome: "Railane",
    genero: "F",
    idade: 26,
    altura: 1.53,
    temCNH: false,
    apelidos: ["Rai", "Lane", "Passos"]

};

let genero = pessoa.genero === 'F' ? 'Bem-vinda' : 'Bem-vindo';
let temCNH = pessoa.temCNH == true ? 'Você tem CNH !' : 'Você não tem CNH !'
console.log(`${genero}, ${pessoa.nome}. Você tem ${pessoa.idade} anos !`);
console.log(`Você tem ${pessoa.altura} de altura !`);
console.log(temCNH);

